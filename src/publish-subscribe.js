const eventHub = {
  map: {
    click: []
  },
  on: (name, fn) => {
    eventHub.map[name] = eventHub.map[name] || []
    eventHub.map[name].push(fn)
  },
  emit: (name, ...args) => {
    const q = eventHub.map[name]
    if (!q) { return }
    q.map(f => f.call(undefined, ...args))
  },
  off: (name, fn) => {
    const q = eventHub.map[name]
    if (!q) { return }
    const index = q.indexOf(fn)
    if (index < 0) { return }
    q.splice(index, 1)
  }
}

eventHub.on('click', console.log)
eventHub.on('click', console.error)

setTimeout(() => {
  eventHub.emit('click', 'lemon')
}, 3000)
