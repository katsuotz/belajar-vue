export default  {
  first_book: (state) => {
    return state.books.find(e => e.id == 1)
  }
}