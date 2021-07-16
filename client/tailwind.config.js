module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-lg': "url(https://images.unsplash.com/photo-1617821102890-6ac4bb577509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)",
        'bbk': "url(https://images.unsplash.com/photo-1626354132340-9fe0d6d77a22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80)",
        'ary':"url(https://images.unsplash.com/photo-1626292730004-0b3373283151?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)",
        'daisy': "url(https://images.unsplash.com/photo-1626275321869-37762baac7b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)",
        'form':"url(https://images.unsplash.com/photo-1620117375105-c16c94ab288b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)",
    },
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
