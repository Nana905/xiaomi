// 数据存储
/**
 * Storage封装 es6封装
 */
// cookie存储在内存中
// storage本身有API ，但是只能存储简单的key/value
// Storage只能存储字符串，需要人工转换为json对象
const  STORAGE_KEY = 'mall';
export default{
  // 存储值
  setItem(key,value,module_name){
    if (module_name){
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key,module_name){
    if (module_name){
      let val = this.getItem(module_name); //返回一个object
      // 获取某一个具体的key值 
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  // 删除某一个值
  clear(key, module_name){
    let val = this.getStorage();
    if (module_name){
      if (!val[module_name])return;
    //   
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    // 将删除的存入sessionstorage中
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}