import React from "react";
import { Container, Box, Heading, SimpleGrid, Divider, Link } from "@chakra-ui/react";
import Section from '../components/Section'
import { WorkGridItem } from "../components/grid-item";

import devlinks from '../public/images/works/devlinks.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projetos
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="devlinks" title="DevLinks" thumbnail={devlinks}>
                    Este é um projeto criado para ajudar programadores iniciantes a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento frontend, backend e estudo de estruturas de dados.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
