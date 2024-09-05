import React, { useEffect, useState } from 'react';

function ListFood() {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.edamam.com/api/food-database/v2/parser?app_id=194436f1&app_key=0f3f8e3f6f0eb812be8af11872acb5f4&nutrition-type=cooking'
        );
        const data = await response.json();
        if (data && data.hints) {
          setFood(data.hints);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
  };

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredFood = food.filter((item) => {
    const matchesSearch = item.food.label.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter ? item.food.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <input
          value={search}
          onChange={handleSearch}
          className="p-2 rounded-md border border-gray-300 mb-4 md:mb-0 md:w-1/2"
          placeholder="Search food..."
        />
        <select
          value={categoryFilter}
          onChange={handleCategoryFilter}
          className="p-2 border border-gray-300 rounded-md ml-4"
        >
          <option value="">All Categories</option>
          <option value="Generic foods">Generic Foods</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFood.length > 0 ? (
          filteredFood.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <a href="#!">
                <img
                  src={item.food.image}
                  alt={item.food.label}
                  className="w-full h-36 object-cover mb-2 rounded-md"
                />
              </a>
              <div className="p-2">
                <h5 className="text-lg font-semibold mb-1">{item.food.label}</h5>
                <p className="text-gray-600 mb-2">Category: {item.food.category}</p>
                <div className="flex justify-between items-center">
                  <p className="text-md font-bold text-blue-600">Price:44 $</p>
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No food items found</p>
        )}
      </div>
    </div>
  );
}

export default ListFood;