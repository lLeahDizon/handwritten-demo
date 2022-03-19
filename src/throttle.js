const throttle = (fn, time) => {
  let timer
  return (...args) => {
    if (timer) { return }
    fn.call(undefined, ...args)
    timer = setTimeout(() => {
      clearTimeout(timer)
    }, time)
  }
}

const fn = throttle((n) => {
  console.log('throttle', n)
}, 3000)

fn(1)
fn(2)
