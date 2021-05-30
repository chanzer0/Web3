import Header from 'header/header';
import { Container } from 'reactstrap';
import './theme.css';

const App = () => {
    return (
        <Container fluid className="p-0">
            <Header />
        </Container>
    );
};

export default App;
