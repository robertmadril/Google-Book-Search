import React from "react";
import Results from "../components/Results";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleBookDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    };

    render() {
        return (
            <div>
                {this.state.books.map(book => (
                    <Results
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                    />
                ))}
            </div>
        );
    }
}

export default Saved;