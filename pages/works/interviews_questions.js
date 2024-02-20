import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="interviews_questions">
             <Container>
                <Title>
                    Interviews Questions <Badge>2024</Badge>
                </Title>
                <P>
                Iniciei esse projeto recentemente e estou começando pelo backend, então ainda não há nada visual, mas pode-se acessar o repositório no github.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Repositório</Meta>
                        <Link href='https://github.com/mateusarcedev/interviews_questions'>
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NODEJS | DOCKER | MYSQL | KNEX | FASTIFY</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/interviews_questions.png" alt="Site de entrevistas" />
             </Container>
        </Layout>
    )
}

export default Work
