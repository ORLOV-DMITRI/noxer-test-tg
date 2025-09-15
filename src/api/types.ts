export interface Product {
    Product_ID: number;
    Product_Name: string;
    OnMain: boolean;
    Created_At: string;
    Updated_At: string;
    images: ProductImage[];
    parameters: ProductParameter[];
    colors: ProductColor[];
    marks: ProductMark[];
    categories: Category[];
    tags: string[] | null;
    extras: ProductExtra[];
    reviews: ProductReview[];
    reviews_video: ProductVideoReview[];
    excluded: ExcludedItem[];
    extra_json: Record<string, unknown> | null;
    from_crm: boolean | null;
    importance_num: ImportanceItem[];
}

export interface ProductImage {
    Image_ID: number;
    Image_URL: string;
    MainImage: boolean;
    Product_ID: number;
    position: string;
    sort_order: number | null;
    title: string;
}

export interface ProductParameter {
    Parameter_ID: number;
    name: string;
    parameter_string: string;
    price: number;
    old_price: number | null;
    chosen: boolean;
    disabled: boolean;
    extra_field_color: string;
    extra_field_image: string;
    parameter_json: {
        add_images?: string[];
        for_crm_id?: string;
    } | null;
    sort_order: number | null;
}

export interface ProductColor {
    Color_ID: number;
    Color_Name: string;
    Color_Code: string;
    Color_image: string;
    Product_ID: number;
    discount: number;
    json_data: {
        add_images: Array<{
            image_name: string;
            image_url: string;
            sort_order: number;
        }>;
    };
    sort_order: number;
}

export interface ProductMark {
    Mark_ID: number;
    Mark_Name: 'sale' | 'new' | 'hit' | 'premium' | 'discount' | 'hot';
}

export interface Category {
    Category_ID: number;
    Category_Name: string;
    Category_Image: string;
    sort_order: number;
}

export interface ProductExtra {
    Product_Extra_ID: number;
    Product_ID: number;
    Characteristics: string;
    Delivery: string;
    Kit: string;
    Offer: string;
    ai_description: string;
}

export interface ProductReview {
    Photo_ID: number;
    Photo_URL: string;
    Product_ID: number;
    sort_order: number | null;
}

export interface ProductVideoReview {
    Video_ID: number;
    Video_URL: string;
    Poster_URL: string;
    Product_ID: number;
    sort_order: number | null;
}

export interface ExcludedItem {
    id: number;
    product_id: number;
    parameter_id: number;
    color_id: number | null;
}

export interface ImportanceItem {
    id: number;
    product_id: number;
    importance: number;
}

export interface Pagination {
    current_page: number;
    has_next: boolean;
    has_prev: boolean;
    per_page: number;
    total_pages: number;
    total_products: number;
}

export interface ProductsResponse {
    products: Product[];
    categories: Category[];
    pagination: Pagination;
    product_marks: ProductMark[];
    special_project_parameters?: Record<string, unknown>;
    special_project_parameters_actions?: Record<string, unknown>[];
    special_project_parameters_badges?: Record<string, unknown>[];
    special_project_parameters_json?: Record<string, unknown>;
    status: string;
}