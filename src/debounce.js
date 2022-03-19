const debounce = (fn, time) => {
  let timer
  return (...args) => {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => {
      fn.call(undefined, ...args)
    }, time)
  }
}

const fn = debounce((n) => {
  console.log(n)
}, 3000)

fn(1)
fn(2)
