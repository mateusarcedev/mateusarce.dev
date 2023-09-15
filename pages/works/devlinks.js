import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="DevLinks">
             <Container>
                <Title>
                    DevLinks <Badge>2023</Badge>
                </Title>
                <P>
                Projeto criado para ajudar programadores iniciantes a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento frontend, backend e estudo de estruturas de dados.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://devlinks.mateusarce.dev/'>
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>TailwindCSS e Nextjs</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/devlinks.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work
