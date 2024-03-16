import { HomeComponent } from '@/components/HomeComponent'

export default function Home() {
  return (
    <>
      <div className="my-3 bg-gray-200">
        <div className="mx-auto max-w-96 p-4">This element is centered using margin:auto</div>
      </div>
      <div className="my-3 flex h-28 justify-center bg-blue-200">
        <div className="p-4">This element is centered using Flex box</div>
      </div>
      <div className="my-3 grid h-28 bg-orange-200">
        <div className="mx-auto p-4">This element is centered using Grid and margin:auto</div>
      </div>
      <div className="my-3 grid h-28 place-items-center bg-green-200">
        <div className="p-4">This element is centered using Grid</div>
      </div>
    </>
  )
}
