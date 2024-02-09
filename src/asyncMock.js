const products = [
  {
    id:'1',
    name:'Suicide Squad',
    price: 2.50,
    category: 'Dc Comics',
    img:'https://www.universal-comics.com/media/products/139837/139837-0-med.jpg',
    stock: 15,
    description:'Suicide Squad Rebirth # 01 (Segunda Mano)'
    
  },
  {
    id: '2',
    name: 'Green Lantern Vol 01',
    price: 24.99,
    category: 'Dc Comics',
    img: 'https://www.universal-comics.com/media/products/127377/127377-0-med.jpg',
    stock: 15,
    description: 'Intergaláctic LawMan.'
  },
  {
    id: '3',
    name: 'Superman AllSTAR',
    price: 38.00,
    category: 'Dc Comics',
    img: 'https://www.universal-comics.com/media/products/126109/126109-0-med.jpg',
    stock: 31,
    description: 'All-STAR Superman Edición DELUXE.'
  },
  {
    id: '4',
    name: 'The Silver Surfer',
    price: 44.99,
    category: 'Marvel Comics',
    img: 'https://www.universal-comics.com/media/products/149411/149411-0-med.jpg',
    stock: 15,
    description: 'Epic COllection Silver Surfer # 5 The return of Thanos.'
  },
  {
    id: '5',
    name: 'Wolverine # 01',
    price: 56.00,
    category: 'Marvel Comics',
    img: 'https://www.universal-comics.com/media/products/145489/145489-0-med.jpg',
    stock: 18,
    description: 'Epic COllection Wolverine #01 Madripoor Nights.'
  },
  {
    id: '6',
    name: 'Captain America # 14',
    price: 44.99,
    category: 'Marvel Comics',
    img: 'https://www.universal-comics.com/media/products/139338/139338-0-med.jpg',
    stock: 20,
    description: 'Epic COllection Captain America # 14 The Captain. (Segunda Mano)'
  }, 
  
] 


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 1500)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category))
    }, 1500)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 1500)
  })
}





