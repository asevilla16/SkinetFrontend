export interface Pagination<T> {
    pageIndex: number
    pageSize: number
    pageCount: number
    data: T;
}

export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    productType: string
    productBrand: string
}
