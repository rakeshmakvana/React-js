import React, { useEffect, useState } from "react";
import { Card, Container, Row, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAsync } from "../../services/Action/bookAction";

const Home = () => {

    const { admins } = useSelector(state => state.bookReducer);

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getAsync());
    }, [dispatch]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredBooks = admins.filter(book => {
        return book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());
    });

    const categories = [...new Set(filteredBooks.map(book => book.category))];

    const booksCategory = categories.reduce((acc, category) => {
        acc[category] = filteredBooks.filter(book => book.category === category);
        return acc;
    }, {});

    return (
        <>
            <div className="bg-secondary py-5">
                <Container>
                    <Row>
                        <div className="col-12 mb-5">
                            <InputGroup className="w-50 mx-auto">
                                <FormControl placeholder="Search for books..." value={search} onChange={handleSearch} />
                            </InputGroup>
                        </div>
                        <div className="col-12 mb-4">
                            <h2>All Books</h2>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-nowrap overflow-auto mb-5">
                                {filteredBooks.length > 0 ? (
                                    filteredBooks.map((el) => (
                                        <Card className="mx-3 card col-3">
                                            <Card.Img className="card-img" variant="top" src={el.url} />
                                            <Card.Body className="text-center">
                                                <Card.Title className="card-title">{el.title}</Card.Title>
                                                <Card.Text className="card-text">{el.author}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <h5 className="text-center text-danger">No Books Found...</h5>
                                    </div>
                                )}
                            </div>
                        </div>
                        {categories.map(category => (
                            <div key={category} className="col-12 mb-4">
                                <div className="col-12 mb-4">
                                    <h2>{category}</h2>
                                </div>
                                <div className="d-flex flex-nowrap overflow-auto mb-4">
                                    {booksCategory[category].length > 0 ? (
                                        booksCategory[category].map((el) => (
                                            <Card className="mx-3 card col-3" key={el.id}>
                                                <Card.Img className="card-img" variant="top" src={el.url} />
                                                <Card.Body className="text-center">
                                                    <Card.Title className="card-title">{el.title}</Card.Title>
                                                    <Card.Text className="card-text">{el.author}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))
                                    ) : (
                                        <div className="col-12">
                                            <h5 className="text-center text-danger">No Books Found...</h5>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
