<script>
import treeItem from "./treeItem"
import refs from "./refs"
// All logics
let count = 1
export default {
  name: "treeSelect",
  props: {
    // tree structure
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    // target node
    value: Array
  },
  data() {
    let name = "v_tree_" + count++;
    return {
      name
    }
  },
  created() {
    // initialize
    let name = this.name
    refs.init({name}, this)
  },
  destroy() {
    refs.destroy(this.name)
  },
  components: {
    treeItem
  },
  render() {
    return (
        <div class="tree">
          <div>treeSelect</div>
          <ul class="vue-tree">
            {
              this.options.map((itemData, index) => {
                return (
                    <treeItem option={itemData}
                              key={`${this.name}${itemData['value']}${index}`}
                              name={this.name}
                    ></treeItem>
                )
              })
            }
          </ul>
        </div>
    )
  }
}
</script>

