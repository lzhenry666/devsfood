let BASE = 'https://api.b7web.com.br/devsfood/api';

const api = {
    async getCategories() {
        return await fetch(`${BASE}/categories`).then(res => res.json());
    },
    async getProducts(category, page, search) {
        let fields = {};
        if (category !== 0) {
            fields.category = category;
        }
        if (page > 0) {
            fields.page = page;
        }
        if (search !== '') {
            fields.search = search;
        }
        let queryString = new URLSearchParams(fields).toString();

        return await fetch(`${BASE}/products?${queryString}`).then(res => res.json());
    },
    async getProductsByCategory(categoryId) {
        return await fetch(`${BASE}/products?category=${categoryId}`).then(res=> res.json());
    }
}

export default api;