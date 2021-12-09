// const arr = [
//   {name: "fruit", dec: "" }
// ]
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "fruits",
//     component: require.resolve("./src/templates/fruits.tsx"),
//     context: {
//       name : "Mango",
//       dec : "this is mango discraption "

//     },
//     defer: true,
//   })
// }



// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   if (page.path.match(/^\/product/)) {

//     page.matchPath = "/product/*"


//     createPage(page)
//   }
// }


var path = require('path')


exports.createPages = async ({ actions, graphql }) => {

  const { createPage } = actions;

  const result = await graphql(`
  {
    allContentfulElectronic {
      nodes {
        sluge
        title
        decs {
          json
        } 
      }
     
    }
  }
  
 
  `)
  console.log(JSON.stringify(result))

result.data.allContentfulElectronic.nodes.forEach((obj) => {
  createPage({
    path: `/product/${obj.sluge}`,
    components: path.resolve('./src/templates/product.tsx'),
    context: {
      itemDetails: obj

    }
  })


})
}

