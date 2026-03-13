import { useState, useEffect } from 'react';

// Import CSS reset
import '@angi/one-design-system/css-reset/globalReset.css';

// Import theme CSS files as URLs (Vite will bundle them but not apply them)
import angiThemeUrl from '@angi/one-design-system/tokens/css/angi.css?url';
import instaproThemeUrl from '@angi/one-design-system/tokens/css/instapro.css?url';
import instaproGrayscaleThemeUrl from './instapro-grayscale.css?url';

// Get theme from localStorage or default to instapro-grayscale
const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem('selectedTheme');
  return (saved as Theme) || 'instapro-grayscale';
};

// Theme URL mapping
const themeUrls: Record<Theme, string> = {
  angi: angiThemeUrl,
  instapro: instaproThemeUrl,
  'instapro-grayscale': instaproGrayscaleThemeUrl,
};

// Import One Design System components
import { Text } from '@angi/one-design-system/components/Text';
import { Button } from '@angi/one-design-system/components/Button';
import { List } from '@angi/one-design-system/components/List';
import { ListItem } from '@angi/one-design-system/components/ListItem';
import { ListItemAction } from '@angi/one-design-system/components/ListItemAction';
import { ListItemDivider } from '@angi/one-design-system/components/ListItemDivider';
import { Input } from '@angi/one-design-system/components/Input';
import { Checkbox } from '@angi/one-design-system/components/Checkbox';
import { CheckboxGroup } from '@angi/one-design-system/components/CheckboxGroup';
import { RadioButton } from '@angi/one-design-system/components/RadioButton';
import { RadioGroup } from '@angi/one-design-system/components/RadioGroup';
import { Textarea } from '@angi/one-design-system/components/Textarea';
import { Link } from '@angi/one-design-system/components/Link';
import { Divider } from '@angi/one-design-system/components/Divider';
import { Spinner } from '@angi/one-design-system/components/Spinner';
import { Progress } from '@angi/one-design-system/components/Progress';
import { Tile } from '@angi/one-design-system/components/Tile';
import { CheckboxTile } from '@angi/one-design-system/components/CheckboxTile';
import { RadioButtonTile } from '@angi/one-design-system/components/RadioButtonTile';

// Import custom layout components (composing design system primitives)
import { Stack, Container } from './components/index';
import tokens from '@angi/one-design-system/tokens/tokens';
import { ElectricianQuoteScreen } from './ElectricianQuoteScreen';

type Theme = 'angi' | 'instapro' | 'instapro-grayscale';

function App() {
  const [showQuoteScreen, setShowQuoteScreen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme());
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState('option1');
  const [tileCheckboxValues, setTileCheckboxValues] = useState<string[]>([]);
  const [tileRadioValue, setTileRadioValue] = useState('radio-tile1');

  if (showQuoteScreen) {
    return (
      <div className="app">
        <Button
          variant="ghost"
          color="neutral"
          size="sm"
          onClick={() => setShowQuoteScreen(false)}
          style={{ position: 'absolute', top: 8, left: 8, zIndex: 10 }}
        >
          ← Back to Showcase
        </Button>
        <ElectricianQuoteScreen />
      </div>
    );
  }

  // Load the active theme CSS on mount and when theme changes
  useEffect(() => {
    // Remove any existing theme link tags
    const existingLinks = document.querySelectorAll('link[data-theme-css]');
    existingLinks.forEach((link) => link.remove());

    // Add the new theme link tag
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = themeUrls[currentTheme];
    link.setAttribute('data-theme-css', currentTheme);
    document.head.appendChild(link);

    // Set data-theme attribute for any additional CSS targeting
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Handle theme switching - save to localStorage and update state
  const handleThemeChange = (theme: Theme) => {
    localStorage.setItem('selectedTheme', theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="app">
      {/* Theme Toggle Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: tokens.color.bg.base.default,
          borderBottom: `${tokens.borderWidth[1]} solid ${tokens.color.border.primary.solid.default}`,
          zIndex: 1000,
          padding: '16px 0',
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="horizontal" spacing="16" align="center" justify="space-between">
            <Text variant="heading.xl">
              <h1>One Design System Showcase</h1>
            </Text>
            <Stack direction="horizontal" spacing="8">
              <Button
                variant="outline"
                color="primary"
                onClick={() => setShowQuoteScreen(true)}
              >
                View Electrician Quote Screen
              </Button>
              <Button
                variant={currentTheme === 'angi' ? 'solid' : 'outline'}
                color="primary"
                onClick={() => handleThemeChange('angi')}
              >
                Angi
              </Button>
              <Button
                variant={currentTheme === 'instapro' ? 'solid' : 'outline'}
                color="primary"
                onClick={() => handleThemeChange('instapro')}
              >
                InstaPro
              </Button>
              <Button
                variant={currentTheme === 'instapro-grayscale' ? 'solid' : 'outline'}
                color="primary"
                onClick={() => handleThemeChange('instapro-grayscale')}
              >
                InstaPro Grayscale
              </Button>
            </Stack>
          </Stack>
        </Container>
      </header>

      <main className="app-main" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
        <Container maxWidth="lg">
          <Stack spacing="48">
            {/* Typography Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Typography</h2>
                </Text>
                <Stack spacing="16">
                  <Text variant="heading.4xl">
                    <h3>Heading 4XL</h3>
                  </Text>
                  <Text variant="heading.3xl">
                    <h3>Heading 3XL</h3>
                  </Text>
                  <Text variant="heading.2xl">
                    <h3>Heading 2XL</h3>
                  </Text>
                  <Text variant="heading.xl">
                    <h4>Heading XL</h4>
                  </Text>
                  <Text variant="heading.lg">
                    <h4>Heading LG</h4>
                  </Text>
                  <Text variant="heading.md">
                    <h5>Heading MD</h5>
                  </Text>
                  <Text variant="heading.sm">
                    <h5>Heading SM</h5>
                  </Text>
                  <Text variant="heading.xs">
                    <h6>Heading XS</h6>
                  </Text>
                  <Divider />
                  <Text variant="body.lg.normal">
                    <p>Body Large Normal - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                  <Text variant="body.lg.bold">
                    <p>Body Large Bold - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                  <Text variant="body.base.normal">
                    <p>Body Base Normal - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                  <Text variant="body.base.bold">
                    <p>Body Base Bold - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                  <Text variant="body.sm.normal">
                    <p>Body Small Normal - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                  <Text variant="body.sm.bold">
                    <p>Body Small Bold - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                  <Text variant="body.xs.normal">
                    <p>Body XS Normal - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                  <Text variant="body.xs.bold">
                    <p>Body XS Bold - The quick brown fox jumps over the lazy dog.</p>
                  </Text>
                </Stack>
              </Stack>
            </section>

            {/* Buttons Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Buttons</h2>
                </Text>
                <Stack spacing="16">
                  <Stack direction="horizontal" spacing="12" wrap>
                    <Button variant="solid" color="primary">
                      Solid Primary
                    </Button>
                    <Button variant="outline" color="primary">
                      Outline Primary
                    </Button>
                    <Button variant="ghost" color="primary">
                      Ghost Primary
                    </Button>
                  </Stack>
                  <Stack direction="horizontal" spacing="12" wrap>
                    <Button variant="solid" color="neutral">
                      Solid Neutral
                    </Button>
                    <Button variant="outline" color="neutral">
                      Outline Neutral
                    </Button>
                  </Stack>
                  <Stack direction="horizontal" spacing="12" wrap>
                    <Button variant="solid" color="danger">
                      Danger
                    </Button>
                    <Button variant="solid" color="primary" disabled>
                      Disabled
                    </Button>
                    <Button variant="solid" color="primary" loading>
                      Loading
                    </Button>
                  </Stack>
                  <Stack direction="horizontal" spacing="12" wrap>
                    <Button variant="solid" color="primary" size="sm">
                      Small
                    </Button>
                    <Button variant="solid" color="primary" size="md">
                      Medium
                    </Button>
                    <Button variant="solid" color="primary" size="lg">
                      Large
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </section>

            {/* Form Inputs Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Form Inputs</h2>
                </Text>
                <Stack spacing="16">
                  <Input label="Text Input" placeholder="Enter text here" />
                  <Input
                    label="Input with Error"
                    placeholder="Enter text here"
                    validationState="invalid"
                    errorMessage="This field is required"
                  />
                  <Input label="Disabled Input" placeholder="Disabled" isDisabled />
                  <Textarea label="Textarea" placeholder="Enter longer text here" rows={4} />
                </Stack>
              </Stack>
            </section>

            {/* Checkboxes Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Checkboxes</h2>
                </Text>
                <CheckboxGroup value={checkboxValues} onChange={setCheckboxValues}>
                  <Stack spacing="16">
                    <Checkbox
                      value="option1"
                      label={{ children: <span>Checkbox Option 1</span> }}
                    />
                    <Checkbox
                      value="option2"
                      label={{ children: <span>Checkbox Option 2</span> }}
                      hint={{ children: <span>With hint text</span> }}
                    />
                    <Checkbox
                      value="option3"
                      label={{ children: <span>Checkbox Option 3</span> }}
                    />
                    <Checkbox
                      value="disabled"
                      label={{ children: <span>Disabled Checkbox</span> }}
                      disabled
                    />
                  </Stack>
                </CheckboxGroup>
              </Stack>
            </section>

            {/* Radio Buttons Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Radio Buttons</h2>
                </Text>
                <RadioGroup value={radioValue} onChange={setRadioValue}>
                  <Stack spacing="16">
                    <RadioButton
                      value="option1"
                      label={{ children: <span>Radio Option 1</span> }}
                    />
                    <RadioButton
                      value="option2"
                      label={{ children: <span>Radio Option 2</span> }}
                      hint={{ children: <span>With hint text</span> }}
                    />
                    <RadioButton
                      value="option3"
                      label={{ children: <span>Radio Option 3</span> }}
                    />
                    <RadioButton
                      value="disabled"
                      label={{ children: <span>Disabled Option</span> }}
                      disabled
                    />
                  </Stack>
                </RadioGroup>
              </Stack>
            </section>

            {/* Tiles Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Tiles</h2>
                </Text>
                <Stack spacing="16">
                  <Text variant="body.base.bold">
                    <p>Basic Tiles</p>
                  </Text>
                  <Stack direction="horizontal" spacing="12" wrap>
                    <Tile style={{ padding: '16px', minWidth: '200px' }}>
                      <Text variant="body.base.bold">
                        <span>Basic Tile</span>
                      </Text>
                    </Tile>
                    <Tile style={{ padding: '16px', minWidth: '200px' }}>
                      <Text variant="body.base.bold">
                        <span>Another Tile</span>
                      </Text>
                    </Tile>
                  </Stack>

                  <Text variant="body.base.bold">
                    <p>Checkbox Tiles</p>
                  </Text>
                  <CheckboxGroup value={tileCheckboxValues} onChange={setTileCheckboxValues}>
                    <Stack spacing="12">
                      <CheckboxTile
                        value="tile1"
                        label={{
                          children: (
                            <Stack spacing="4">
                              <Text variant="body.base.bold">
                                <span>Checkbox Tile 1</span>
                              </Text>
                              <Text variant="body.sm.normal">
                                <span>Selectable tile with checkbox</span>
                              </Text>
                            </Stack>
                          ),
                        }}
                      />
                      <CheckboxTile
                        value="tile2"
                        label={{
                          children: (
                            <Stack spacing="4">
                              <Text variant="body.base.bold">
                                <span>Checkbox Tile 2</span>
                              </Text>
                              <Text variant="body.sm.normal">
                                <span>Another selectable option</span>
                              </Text>
                            </Stack>
                          ),
                        }}
                      />
                    </Stack>
                  </CheckboxGroup>

                  <Text variant="body.base.bold">
                    <p>Radio Button Tiles</p>
                  </Text>
                  <RadioGroup value={tileRadioValue} onChange={setTileRadioValue}>
                    <Stack spacing="12">
                      <RadioButtonTile
                        value="radio-tile1"
                        label={{
                          children: (
                            <Stack spacing="4">
                              <Text variant="body.base.bold">
                                <span>Radio Tile 1</span>
                              </Text>
                              <Text variant="body.sm.normal">
                                <span>Selectable tile with radio button</span>
                              </Text>
                            </Stack>
                          ),
                        }}
                      />
                      <RadioButtonTile
                        value="radio-tile2"
                        label={{
                          children: (
                            <Stack spacing="4">
                              <Text variant="body.base.bold">
                                <span>Radio Tile 2</span>
                              </Text>
                              <Text variant="body.sm.normal">
                                <span>Another radio option</span>
                              </Text>
                            </Stack>
                          ),
                        }}
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Stack>
            </section>

            {/* Lists Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Lists</h2>
                </Text>
                <Stack spacing="16">
                  <Text variant="body.base.bold">
                    <p>Border Variant</p>
                  </Text>
                  <List variant="border">
                    <ListItem>
                      <ListItemAction as="button" onPress={() => {}} icon={<></>}>
                        List item with action
                      </ListItemAction>
                    </ListItem>
                    <ListItemDivider />
                    <ListItem>
                      <ListItemAction as="button" onPress={() => {}} icon={<></>}>
                        Another list item
                      </ListItemAction>
                    </ListItem>
                    <ListItemDivider />
                    <ListItem>
                      <ListItemAction as="button" onPress={() => {}} icon={<></>}>
                        Third list item
                      </ListItemAction>
                    </ListItem>
                  </List>

                  <Text variant="body.base.bold">
                    <p>Default Variant</p>
                  </Text>
                  <List variant="default">
                    <ListItem>
                      <ListItemAction as="button" onPress={() => {}} icon={<></>}>
                        Default list item
                      </ListItemAction>
                    </ListItem>
                    <ListItemDivider />
                    <ListItem>
                      <ListItemAction as="button" onPress={() => {}} icon={<></>}>
                        Another default item
                      </ListItemAction>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </section>

            {/* Links Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Links</h2>
                </Text>
                <Stack spacing="12">
                  <div>
                    <Link size="md">
                      <a href="#">Default Link (Medium)</a>
                    </Link>
                  </div>
                  <div>
                    <Link size="sm">
                      <a href="#">Small Link</a>
                    </Link>
                  </div>
                  <Text variant="body.base.normal">
                    <p>
                      This is a paragraph with an{' '}
                      <Link size="md">
                        <a href="#">inline link</a>
                      </Link>{' '}
                      in the middle of the text.
                    </p>
                  </Text>
                </Stack>
              </Stack>
            </section>

            {/* Loading States Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Loading States</h2>
                </Text>
                <Stack spacing="16">
                  <Stack direction="horizontal" spacing="24" align="center">
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                  </Stack>
                  <Progress value={33} />
                  <Progress value={66} />
                  <Progress value={100} />
                </Stack>
              </Stack>
            </section>

            {/* Dividers Section */}
            <section>
              <Stack spacing="24">
                <Text variant="heading.3xl">
                  <h2>Dividers</h2>
                </Text>
                <Text variant="body.base.normal">
                  <p>Content above divider</p>
                </Text>
                <Divider />
                <Text variant="body.base.normal">
                  <p>Content below divider</p>
                </Text>
              </Stack>
            </section>
          </Stack>
        </Container>
      </main>
    </div>
  );
}

export default App;
