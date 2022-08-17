class LocalCatch {
  setItem(key: string, data: any, expire?: number) {
    const item = {
      data,
      expire,
    };
    if (expire) {
      item.expire = new Date().getTime() + expire * 1000;
    }

    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      const expire = data?.expire;
      if (expire && expire < new Date().getTime()) {
        this.removeItem(key);
        return null;
      } else {
        return data;
      }
    }
    return null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

export default new LocalCatch();
