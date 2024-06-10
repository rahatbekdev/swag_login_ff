import { useEffect, useState } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Token = ({ token }) => {
  const [text, setText] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch("http://3.121.185.60/auth/signUp", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setText(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPublications();
  }, [token]);

  return (
    <Container>
      <Title>Hello</Title>
      <List>
        {text.map((el) => (
          <ListItem key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.content}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Token;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;
