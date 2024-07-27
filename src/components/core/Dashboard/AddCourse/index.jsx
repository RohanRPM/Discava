import RenderSteps from "./RenderSteps"

export default function AddProduct() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Product
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Product Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Product Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Set the Product Price or make it free if applicable.</li>
            <li>Standard size for the product image is 1024x1024.</li>
            <li>The video section controls the product demonstration video.</li>
            <li>Product Details section is where you create & organize product information.</li>
            <li>
              Add Features in the Product Details section to highlight key aspects,
              specifications, and benefits.
            </li>
            <li>
              Information from the Additional Data section appears on the
              product detail page.
            </li>
            <li>Make Announcements to notify any important updates</li>
            <li>or promotions to all customers at once.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
