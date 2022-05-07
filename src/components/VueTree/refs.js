// maintain multiple tree instances
let refs = {}

// whole tree abstract
class Refs {
    constructor(opts, tree) {
        let name = this.name = opts.name
        this.tree = tree
        this.refs = {}
        // add tree instance to map
        refs[name] = this
    }

    // get method
    get(cid) {
        return cid ? this.refs[cid] : this.tree
    }

    // set method
    set(vm) {
        let cid = vm.cid
        this.refs[cid] = vm
    }
}

// initialize factory production function
let init = function (opts, tree) {
    let name = opts.name
    if (!refs[name]) {
        return new Refs(opts, tree)
    } else {
        return refs[name]
    }
}

// destroy instance
let destroy = function (name) {
    refs[name] && delete refs[name]
}

// get instance
let get = function (name,cid) {
    return refs[name]&& refs[name].get(cid)

}
// set instance
let set = function (name,vm) {
    refs[name]&& refs[name].set(vm)

}

export default {
    init,
    destroy,
    get,
    set
}
