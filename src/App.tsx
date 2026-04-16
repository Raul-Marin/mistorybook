import type { ReactNode } from 'react'
import {
  Badge,
  Button,
  Card,
  Footer,
  FooterCode,
  FooterLink,
  Heading,
  Input,
  Text,
} from './index'
import './App.css'

function App() {
  return (
    <div className="showcase">
      <header className="showcase-hero">
        <Text as="p" size="small" tone="muted" className="showcase-kicker">
          Design system
        </Text>
        <Heading level={1}>Mistorybook</Heading>
        <Text tone="muted" size="lead" className="showcase-lead">
          Showcase de los componentes del mini sistema: tokens compartidos con
          Storybook.
        </Text>
        <div className="showcase-badges">
          <Badge variant="success">En uso</Badge>
          <Badge variant="neutral">v0</Badge>
          <Badge variant="warning">Preview</Badge>
          <Badge variant="danger">Breaking</Badge>
        </div>
      </header>

      <main className="showcase-main">
        <ShowcaseSection
          id="typography"
          title="Text & headings"
          description="Texto de cuerpo, tonos y encabezados semánticos."
        >
          <div className="showcase-panel">
            <Caption>Body / lead / small</Caption>
            <Text as="p" size="lead">
              Lead — párrafo introductorio con más aire.
            </Text>
            <Text as="p" size="body">
              Body — texto principal para interfaces y formularios.
            </Text>
            <Text as="p" size="small" tone="muted">
              Small muted — ayuda, metadatos o captions.
            </Text>
            <Text as="p" size="small" tone="danger">
              Danger — mensajes de error o advertencia crítica.
            </Text>
          </div>
          <div className="showcase-panel">
            <Caption>Heading 1–3</Caption>
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="badges"
          title="Badge"
          description="Etiquetas compactas por estado o categoría."
        >
          <div className="showcase-panel showcase-row">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="buttons"
          title="Button"
          description="Variantes de acción y tres tamaños."
        >
          <div className="showcase-panel">
            <Caption>Variantes</Caption>
            <div className="showcase-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>
          <div className="showcase-panel">
            <Caption>Tamaños (primary)</Caption>
            <div className="showcase-row showcase-row--align-end">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>
          <div className="showcase-panel">
            <Caption>Estado deshabilitado</Caption>
            <div className="showcase-row">
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="cards"
          title="Card"
          description="Contenedores con variante de superficie y padding."
        >
          <div className="showcase-cards">
            <Card variant="elevated" padding="md" className="showcase-card-inner">
              <Text as="p" size="body" className="showcase-card-title">
                Elevated
              </Text>
              <Text as="p" size="small" tone="muted">
                Sombra y borde suave.
              </Text>
            </Card>
            <Card variant="outline" padding="md" className="showcase-card-inner">
              <Text as="p" size="body" className="showcase-card-title">
                Outline
              </Text>
              <Text as="p" size="small" tone="muted">
                Solo borde, sin sombra.
              </Text>
            </Card>
            <Card variant="ghost" padding="sm" className="showcase-card-inner">
              <Text as="p" size="body" className="showcase-card-title">
                Ghost
              </Text>
              <Text as="p" size="small" tone="muted">
                Fondo transparente, padding sm.
              </Text>
            </Card>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="inputs"
          title="Input"
          description="Campo con etiqueta, hint, error y tamaños."
        >
          <div className="showcase-panel showcase-inputs">
            <Input
              label="Default"
              placeholder="Escribe algo…"
              hint="Texto de ayuda bajo el campo."
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              inputSize="sm"
              hint="Tamaño small."
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              error="Demasiado corta (mín. 8 caracteres)."
            />
            <Input
              label="Deshabilitado"
              placeholder="No editable"
              disabled
              hint="Estado disabled."
            />
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="composition"
          title="Composición"
          description="Ejemplo de formulario dentro de una card."
        >
          <Card variant="elevated" padding="md" className="showcase-composition">
            <Heading level={3}>Crear cuenta</Heading>
            <Text as="p" size="small" tone="muted">
              Los mismos tokens que en Storybook.
            </Text>
            <Input label="Nombre" placeholder="Ada Lovelace" />
            <Input
              label="Email"
              type="email"
              placeholder="ada@example.com"
            />
            <div className="showcase-actions">
              <Button variant="primary" type="button">
                Continuar
              </Button>
              <Button variant="secondary" type="button">
                Cancelar
              </Button>
            </div>
          </Card>
        </ShowcaseSection>

        <ShowcaseSection
          id="footer"
          title="Footer"
          description="Pie de página con variantes de superficie y utilidades de enlace/código."
        >
          <div className="showcase-panel showcase-footer-preview">
            <Caption>Variante default (misma que el pie global)</Caption>
            <Footer variant="default">
              <Text as="p" size="small" tone="muted">
                Preview embebido del componente <FooterCode>Footer</FooterCode>.
              </Text>
            </Footer>
          </div>
          <div className="showcase-panel showcase-footer-preview">
            <Caption>Subtle y minimal</Caption>
            <div className="showcase-footer-stack">
              <Footer variant="subtle">
                <Text as="p" size="small" tone="muted">
                  Subtle — fondo <FooterCode>--color-bg</FooterCode>.
                </Text>
              </Footer>
              <Footer variant="minimal">
                <Text as="p" size="small" tone="muted">
                  Minimal — sin borde ni fondo de superficie.
                </Text>
              </Footer>
            </div>
          </div>
        </ShowcaseSection>
      </main>

      <Footer variant="default">
        <Text as="p" size="small" tone="muted">
          Ver documentación interactiva en <FooterCode>npm run storybook</FooterCode>{' '}
          →{' '}
          <FooterLink href="http://localhost:6006">localhost:6006</FooterLink>
          {' · '}
          <FooterLink
            href="https://mistorybook.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Storybook en Vercel
          </FooterLink>
        </Text>
      </Footer>
    </div>
  )
}

function Caption({ children }: { children: string }) {
  return (
    <Text as="p" size="small" tone="muted" className="showcase-caption">
      {children}
    </Text>
  )
}

function ShowcaseSection({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="showcase-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="showcase-section-head">
        <Heading level={2} id={`${id}-title`}>
          {title}
        </Heading>
        <Text as="p" size="small" tone="muted">
          {description}
        </Text>
      </div>
      {children}
    </section>
  )
}

export default App
