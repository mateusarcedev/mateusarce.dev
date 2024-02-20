import React from "react";
import { Container, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from '../components/Section'
import { WorkGridItem } from "../components/grid-item";

import devlinks from '../public/images/works/devlinks.png'
import interviews_questions from '../public/images/works/interviews_questions.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projetos
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="devlinks" title="DevLinks" thumbnail={devlinks}>
                    <Box textAlign={"justify"} p={2}>
                    Este é um projeto criado para ajudar programadores iniciantes a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento frontend, backend e estudo de estruturas de dados.
                    </Box>
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="interviews_questions" title="Interviews Questions" thumbnail={interviews_questions}>
                    <Box textAlign={"justify"} p={2}>
                    Este projeto tem como objetivo criar um site onde os desenvolvedores possam praticar perguntas e respostas de entrevistas relacionadas a várias tecnologias de programação. O site irá categorizar perguntas e respostas, permitindo que os usuários naveguem por perguntas por categoria e idioma (inicialmente suportando inglês e português). O backend da aplicação é desenvolvido usando Node.js com o framework Fastify para construir APIs e o Knex.js como o construtor de consultas SQL para interagir com o banco de dados MySQL.
                    </Box>
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
