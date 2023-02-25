type TCoinId = string

type TCoin = {
    id: TProductId,
    name: string,
    apr: number,
    depositFee: number,
    url: Url,
    icon: string,
    image: string,
    lpSymbol:string,
    lpAddresses: Object,
    supply: number,
    tokenSimbol: string,
    address:string,

    maticPair: Object,
}
type TAPIAVODetailResponse = TCoin

type TAPIAvoResponse = {
    length: number
    data: TProduct[]
    error?: string
}