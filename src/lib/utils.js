/**
 * 获取值的原始类型字符串，例如 [object Object]
 */
const _toString = Object.prototype.toString

/**
 * 判断是否为数组
 * @param {object} val 要判断的值
 * @returns {boolean} 返回判断结果
 */
export function isArray(val) {
  return _toString.call(val) === '[object Array]'
}

/**
 * 判断是否为普通对象
 * @param {object} val 要判断的值
 * @returns {boolean} 返回判断结果
 */
export function isObject(val) {
  return _toString.call(val) === '[object Object]'
}

/**
 * 遍历
 * @param {object|array} obj 要迭代的对象
 * @param {function} fn 为每个项调用的回调
 */
export function forEach(obj, fn) {
  if (obj === null || obj === undefined) return
  if (typeof obj !== 'object') obj = [obj]
  if (isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj)
    }
  } else {
    for (const k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        fn.call(null, obj[k], k, obj)
      }
    }
  }
}

/**
 * 对象深合并
 * @param  {...object} args 对象
 * @returns {object} 合并后的对象
 */
export function merge(...args) {
  let result = {}
  for (let i = 0, l = args.length; i < l; i++) {
    if (!isObject(args[i])) continue
    forEach(args[i], (val, key) => (result[key] = assign(result[key], val)))
  }
  return result
}

/**
 * 合并分配值
 * @param {any} target 分配的前值
 * @param {any} source 分配的后值
 * @returns {any} 最终分配值
 */
export function assign(target, source) {
  if (isObject(target) && isObject(source)) {
    return merge(target, source)
  } else if (isObject(source)) {
    return merge({}, source)
  } else if (isArray(source)) {
    return source.slice()
  }
  return source
}
