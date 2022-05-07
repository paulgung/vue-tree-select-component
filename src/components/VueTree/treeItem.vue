<script>
// tree-item: maintain tree nodes' logic and content
import refs from "./refs"

let count = 1
export default {
  name: "treeItem",
  props: {
    option: Object,
    name: String,
  },
  data() {
    let cid = this.cid || (`tree-item` + count++)
    return {
      level: (this.$parent.level || 0) + 1,
      cid,
      indent: 3,
      expand: false,
      checked: false
    }
  },
  computed: {
    isFolder() {
      return !!this.option["children"]
    }
  },
  mounted() {
    let name = this.name
    // set children node to the tree
    refs.set(name, this)
    this.setDefault()
  },
  methods: {
    handleClickExpand() {
      this.expand = !this.expand
    },
    handleClickItem() {
      this.checked = !this.checked
    },
    setDefault() {
      let tree = refs.get(this.name)
      let _value = tree.value
      if (_value.indexOf(this.option["value"]) > -1) {
        this.checked = true
      }

    }
  },
  render() {
    return (
        <li class={["tree_item", this.checked && "is-checked"]}>
          {/* arrow */}
          <div class={["arrow", this.expand ? "expand" : ""]}
               style={{display: this.isFolder ? "block" : "none"}}
               onClick={this.handleClickExpand}
          ></div>
          {/* title */}
          <a class={["v-tree__title"]}
             style={{paddingLeft: this.level !== 0 && `${this.level * this.indent}px`}}
             onClick={this.handleClickItem}
          >
            {this.option["text"]}
          </a>
          {/* nested */}
          {
            <ul class="v-tree_folder" style={{display: this.expand ? "block" : "none"}}>
              {
                  this.isFolder &&
                  this.option["children"].map((itemData, index) => {
                    return (
                        <tree-item option={itemData}
                                   key={`${this.name}${itemData['value']}${index}`}
                                   name={this.name}
                        ></tree-item>
                    )
                  })
              }
            </ul>
          }
        </li>

    )
  }
}
</script>
<style scoped>
li{
  position: relative;
}
.v-tree__title{
  margin: 5px;
}
.arrow {
  width: 8px;
  height: 8px;
  left: -10px;
  top: 5px;
  position: absolute;
  border-top: 1px solid black;
  border-left: 1px solid black;
  transform: rotate(-135deg);
}

.expand {
  transform: rotate(45deg);
}
.is-checked{
  color: #f81010;
}
ul,li{
  list-style: none;
}

</style>
