import { getApperClient } from "@/services/apperClient";

// Transform database record to frontend format
const transformProduct = (dbProduct) => {
  if (!dbProduct) return null;
  
  return {
    Id: dbProduct.Id,
    name: dbProduct.name_c || "",
    brand: dbProduct.brand_c || "",
    price: parseFloat(dbProduct.price_c) || 0,
    originalPrice: parseFloat(dbProduct.original_price_c) || 0,
    category: dbProduct.category_c || "",
    inStock: dbProduct.in_stock_c === true || dbProduct.in_stock_c === "true",
    rating: parseFloat(dbProduct.rating_c) || 0,
    reviewCount: parseInt(dbProduct.review_count_c) || 0,
    description: dbProduct.description_c || "",
    images: dbProduct.images_c ? dbProduct.images_c.split('\n').filter(url => url.trim()) : [],
    specs: {
      ram: dbProduct.specs_ram_c || "",
      storage: dbProduct.specs_storage_c || "",
      camera: dbProduct.specs_camera_c || "",
      display: dbProduct.specs_display_c || "",
      processor: dbProduct.specs_processor_c || "",
      battery: dbProduct.specs_battery_c || "",
      os: dbProduct.specs_os_c || ""
    }
  };
};

const productService = {
  getAll: async () => {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords('product_c', {
        fields: [
          {"field": {"Name": "Id"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "brand_c"}},
          {"field": {"Name": "price_c"}},
          {"field": {"Name": "original_price_c"}},
          {"field": {"Name": "category_c"}},
          {"field": {"Name": "in_stock_c"}},
          {"field": {"Name": "rating_c"}},
          {"field": {"Name": "review_count_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "images_c"}},
          {"field": {"Name": "specs_ram_c"}},
          {"field": {"Name": "specs_storage_c"}},
          {"field": {"Name": "specs_camera_c"}},
          {"field": {"Name": "specs_display_c"}},
          {"field": {"Name": "specs_processor_c"}},
          {"field": {"Name": "specs_battery_c"}},
          {"field": {"Name": "specs_os_c"}}
        ],
        pagingInfo: { limit: 100, offset: 0 }
      });
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }
      
      if (!response.data || response.data.length === 0) {
        return [];
      }
      
      return response.data.map(transformProduct);
    } catch (error) {
      console.error("Error fetching all products:", error?.response?.data?.message || error.message);
      return [];
    }
  },

  getById: async (id) => {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.getRecordById('product_c', parseInt(id), {
        fields: [
          {"field": {"Name": "Id"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "brand_c"}},
          {"field": {"Name": "price_c"}},
          {"field": {"Name": "original_price_c"}},
          {"field": {"Name": "category_c"}},
          {"field": {"Name": "in_stock_c"}},
          {"field": {"Name": "rating_c"}},
          {"field": {"Name": "review_count_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "images_c"}},
          {"field": {"Name": "specs_ram_c"}},
          {"field": {"Name": "specs_storage_c"}},
          {"field": {"Name": "specs_camera_c"}},
          {"field": {"Name": "specs_display_c"}},
          {"field": {"Name": "specs_processor_c"}},
          {"field": {"Name": "specs_battery_c"}},
          {"field": {"Name": "specs_os_c"}}
        ]
      });
      
      if (!response.success) {
        console.error(response.message);
        throw new Error("Product not found");
      }
      
      if (!response.data) {
        throw new Error("Product not found");
      }
      
      return transformProduct(response.data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error?.response?.data?.message || error.message);
      throw error;
    }
  },

  getByCategory: async (category) => {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords('product_c', {
        fields: [
          {"field": {"Name": "Id"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "brand_c"}},
          {"field": {"Name": "price_c"}},
          {"field": {"Name": "original_price_c"}},
          {"field": {"Name": "category_c"}},
          {"field": {"Name": "in_stock_c"}},
          {"field": {"Name": "rating_c"}},
          {"field": {"Name": "review_count_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "images_c"}},
          {"field": {"Name": "specs_ram_c"}},
          {"field": {"Name": "specs_storage_c"}},
          {"field": {"Name": "specs_camera_c"}},
          {"field": {"Name": "specs_display_c"}},
          {"field": {"Name": "specs_processor_c"}},
          {"field": {"Name": "specs_battery_c"}},
          {"field": {"Name": "specs_os_c"}}
        ],
        where: [
          {
            "FieldName": "category_c",
            "Operator": "EqualTo",
            "Values": [category]
          }
        ],
        pagingInfo: { limit: 100, offset: 0 }
      });
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }
      
      if (!response.data || response.data.length === 0) {
        return [];
      }
      
      return response.data.map(transformProduct);
    } catch (error) {
      console.error(`Error fetching products by category ${category}:`, error?.response?.data?.message || error.message);
      return [];
    }
  },

  search: async (query) => {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords('product_c', {
        fields: [
          {"field": {"Name": "Id"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "brand_c"}},
          {"field": {"Name": "price_c"}},
          {"field": {"Name": "original_price_c"}},
          {"field": {"Name": "category_c"}},
          {"field": {"Name": "in_stock_c"}},
          {"field": {"Name": "rating_c"}},
          {"field": {"Name": "review_count_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "images_c"}},
          {"field": {"Name": "specs_ram_c"}},
          {"field": {"Name": "specs_storage_c"}},
          {"field": {"Name": "specs_camera_c"}},
          {"field": {"Name": "specs_display_c"}},
          {"field": {"Name": "specs_processor_c"}},
          {"field": {"Name": "specs_battery_c"}},
          {"field": {"Name": "specs_os_c"}}
        ],
        whereGroups: {
          operator: "OR",
          subGroups: [
            {
              conditions: [
                {
                  fieldName: "name_c",
                  operator: "Contains",
                  values: [query]
                }
              ]
            },
            {
              conditions: [
                {
                  fieldName: "brand_c",
                  operator: "Contains",
                  values: [query]
                }
              ]
            },
            {
              conditions: [
                {
                  fieldName: "category_c",
                  operator: "Contains",
                  values: [query]
                }
              ]
            }
          ]
        },
        pagingInfo: { limit: 100, offset: 0 }
      });
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }
      
      if (!response.data || response.data.length === 0) {
        return [];
      }
      
      return response.data.map(transformProduct);
    } catch (error) {
      console.error(`Error searching products with query "${query}":`, error?.response?.data?.message || error.message);
      return [];
    }
  },

  filterProducts: async (filters) => {
    try {
      const apperClient = getApperClient();
      
      const whereConditions = [];
      const whereSubGroups = [];
      
      // Brand filter
      if (filters.brands && filters.brands.length > 0) {
        whereSubGroups.push({
          conditions: filters.brands.map(brand => ({
            fieldName: "brand_c",
            operator: "EqualTo",
            values: [brand]
          })),
          operator: "OR"
        });
      }
      
      // Category filter
      if (filters.categories && filters.categories.length > 0) {
        whereSubGroups.push({
          conditions: filters.categories.map(category => ({
            fieldName: "category_c",
            operator: "EqualTo",
            values: [category]
          })),
          operator: "OR"
        });
      }
      
      // Price range filter
      if (filters.priceRange) {
        if (filters.priceRange.min > 0) {
          whereConditions.push({
            FieldName: "price_c",
            Operator: "GreaterThanOrEqualTo",
            Values: [filters.priceRange.min.toString()]
          });
        }
        if (filters.priceRange.max < 2000) {
          whereConditions.push({
            FieldName: "price_c",
            Operator: "LessThanOrEqualTo",
            Values: [filters.priceRange.max.toString()]
          });
        }
      }
      
      // Stock filter
      if (filters.inStockOnly) {
        whereConditions.push({
          FieldName: "in_stock_c",
          Operator: "EqualTo",
          Values: ["true"]
        });
      }
      
      // RAM filter
      if (filters.ram && filters.ram.length > 0) {
        whereSubGroups.push({
          conditions: filters.ram.map(ram => ({
            fieldName: "specs_ram_c",
            operator: "EqualTo",
            values: [ram]
          })),
          operator: "OR"
        });
      }
      
      // Storage filter
      if (filters.storage && filters.storage.length > 0) {
        whereSubGroups.push({
          conditions: filters.storage.map(storage => ({
            fieldName: "specs_storage_c",
            operator: "EqualTo",
            values: [storage]
          })),
          operator: "OR"
        });
      }
      
      const params = {
        fields: [
          {"field": {"Name": "Id"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "brand_c"}},
          {"field": {"Name": "price_c"}},
          {"field": {"Name": "original_price_c"}},
          {"field": {"Name": "category_c"}},
          {"field": {"Name": "in_stock_c"}},
          {"field": {"Name": "rating_c"}},
          {"field": {"Name": "review_count_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "images_c"}},
          {"field": {"Name": "specs_ram_c"}},
          {"field": {"Name": "specs_storage_c"}},
          {"field": {"Name": "specs_camera_c"}},
          {"field": {"Name": "specs_display_c"}},
          {"field": {"Name": "specs_processor_c"}},
          {"field": {"Name": "specs_battery_c"}},
          {"field": {"Name": "specs_os_c"}}
        ],
        pagingInfo: { limit: 100, offset: 0 }
      };
      
      if (whereConditions.length > 0) {
        params.where = whereConditions;
      }
      
      if (whereSubGroups.length > 0) {
        params.whereGroups = {
          operator: "AND",
          subGroups: whereSubGroups
        };
      }
      
      const response = await apperClient.fetchRecords('product_c', params);
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }
      
      if (!response.data || response.data.length === 0) {
        return [];
      }
      
      return response.data.map(transformProduct);
    } catch (error) {
      console.error("Error filtering products:", error?.response?.data?.message || error.message);
      return [];
    }
  },

  getFeatured: async () => {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords('product_c', {
        fields: [
          {"field": {"Name": "Id"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "brand_c"}},
          {"field": {"Name": "price_c"}},
          {"field": {"Name": "original_price_c"}},
          {"field": {"Name": "category_c"}},
          {"field": {"Name": "in_stock_c"}},
          {"field": {"Name": "rating_c"}},
          {"field": {"Name": "review_count_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "images_c"}},
          {"field": {"Name": "specs_ram_c"}},
          {"field": {"Name": "specs_storage_c"}},
          {"field": {"Name": "specs_camera_c"}},
          {"field": {"Name": "specs_display_c"}},
          {"field": {"Name": "specs_processor_c"}},
          {"field": {"Name": "specs_battery_c"}},
          {"field": {"Name": "specs_os_c"}}
        ],
        where: [
          {
            "FieldName": "rating_c",
            "Operator": "GreaterThanOrEqualTo",
            "Values": ["4.6"]
          }
        ],
        pagingInfo: { limit: 100, offset: 0 }
      });
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }
      
      if (!response.data || response.data.length === 0) {
        return [];
      }
      
      return response.data.map(transformProduct);
    } catch (error) {
      console.error("Error fetching featured products:", error?.response?.data?.message || error.message);
      return [];
    }
  },

  getTrending: async () => {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords('product_c', {
        fields: [
          {"field": {"Name": "Id"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "brand_c"}},
          {"field": {"Name": "price_c"}},
          {"field": {"Name": "original_price_c"}},
          {"field": {"Name": "category_c"}},
          {"field": {"Name": "in_stock_c"}},
          {"field": {"Name": "rating_c"}},
          {"field": {"Name": "review_count_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "images_c"}},
          {"field": {"Name": "specs_ram_c"}},
          {"field": {"Name": "specs_storage_c"}},
          {"field": {"Name": "specs_camera_c"}},
          {"field": {"Name": "specs_display_c"}},
          {"field": {"Name": "specs_processor_c"}},
          {"field": {"Name": "specs_battery_c"}},
          {"field": {"Name": "specs_os_c"}}
        ],
        where: [
          {
            "FieldName": "review_count_c",
            "Operator": "GreaterThan",
            "Values": ["500"]
          }
        ],
        pagingInfo: { limit: 100, offset: 0 }
      });
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }
      
      if (!response.data || response.data.length === 0) {
        return [];
      }
      
      return response.data.map(transformProduct);
    } catch (error) {
      console.error("Error fetching trending products:", error?.response?.data?.message || error.message);
      return [];
    }
  }
};

export default productService;