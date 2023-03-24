import { useRouter } from 'next/router'

const NFT = () => {
  const router = useRouter()
  const { nft } = router.query

  return (
    <div>
      Fetch nft data
      put image
      filter nft in database
      if not nft in db error 404
      layout 
      <p>NFT: {nft}</p>
    </div>
  )
}

export default NFT