import React, { Component } from "react";
import Results from "../components/Results";
import SearchBar from "../components/Search";
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        q: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res => {
                this.setState({
                    books: res.data
                })
            }
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No New Books Found, Try a Different Query"
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
        }).then(() => this.getBooks());
    };

    render() {
        return (
            <div>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q} />
                <div>
                    {this.state.books.map(book => (
                        <Results
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        Button={() => (
                          <button
                            onClick={() => this.handleBookSave(book.id)}
                            className="btn btn-primary ml-2"
                          >
                            Save
                          </button>
                        )}
                    />

                    ))}
                </div>

            </div>
        )
    }
}

export default Search;