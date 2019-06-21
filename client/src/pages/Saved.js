import React, {Component} from "react";
import Results from "../components/Results";
import API from "../utils/API"

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => {
                console.log(res.data)
                this.setState({
                    books: res.data
                })
            }
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
                        title={book.title}
                        link={book.link}
                        authors={book.author}
                        description={book.description}
                        image={book.image}
                        Button={() => (
                            <button
                              onClick={() => this.handleBookDelete(book.id)}
                              className="btn btn-primary ml-2"
                            >
                              Delete
                            </button>
                          )}
                    />
                ))}
            </div>
        );
    }
}

export default Saved;