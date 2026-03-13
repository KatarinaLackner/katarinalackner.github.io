import { useState } from 'react';

import '@angi/one-design-system/css-reset/globalReset.css';

import { Box } from '@angi/one-design-system/components/Box';
import { Button } from '@angi/one-design-system/components/Button';
import { Input } from '@angi/one-design-system/components/Input';
import { Label } from '@angi/one-design-system/components/Label';
import { Stack } from '@angi/one-design-system/components/Stack';
import { Text } from '@angi/one-design-system/components/Text';

/**
 * Target/crosshair icon for "use my location" (geolocation) button.
 * Renders as SVG so it can be passed to Button iconStart.
 */
function GeolocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      aria-hidden
      {...props}
    >
      <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
    </svg>
  );
}

export function ElectricianQuoteScreen() {
  const [zipValue, setZipValue] = useState('05401');
  const [locationName, setLocationName] = useState('Burlington, VT');

  const handleNext = () => {
    // Navigate or submit
  };

  const handleUseLocation = () => {
    // Geolocation API or fallback
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      {/* Header with logo and progress */}
      <header style={{ flexShrink: 0 }}>
        <Stack direction="column" gap="0">
          <Box style={{ padding: '24px 24px 0' }}>
            <Text variant="heading.lg">
              <span style={{ color: '#EB4B4B', fontWeight: 700 }}>Angi</span>
            </Text>
          </Box>
          {/* Progress indicator: orange line then light gray line */}
          <Box
            style={{
              display: 'flex',
              width: '100%',
              marginTop: '8px',
            }}
          >
            <Box
              style={{
                height: '4px',
                width: '120px',
                backgroundColor: '#EB4B4B',
                flexShrink: 0,
              }}
            />
            <Box
              style={{
                height: '4px',
                flex: 1,
                backgroundColor: '#E5E7EB',
              }}
            />
          </Box>
        </Stack>
      </header>

      {/* Main content - centered */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
        }}
      >
        <Stack direction="column" gap="24" alignItems="flex-start" style={{ maxWidth: '480px', width: '100%' }}>
          <Text variant="heading.2xl">
            <h1 style={{ margin: 0, color: '#374151' }}>
              Compare quotes from top-rated Electricians
            </h1>
          </Text>
          <Text variant="body.base.normal">
            <p style={{ margin: 0, color: '#374151' }}>Enter the location of your project</p>
          </Text>

          <Stack direction="column" gap="8" style={{ width: '100%' }}>
            <Label htmlFor="zip-code">ZIP code</Label>
            <Stack direction="row" gap="8" alignItems="stretch" style={{ width: '100%' }}>
              <Box style={{ flex: 1, minWidth: 0 }}>
                <Input
                  id="zip-code"
                  value={zipValue}
                  onChange={(e) => setZipValue(e.target.value)}
                  validation="valid"
                  size="md"
                  style={{ width: '100%' }}
                />
              </Box>
              <Button
                type="button"
                variant="outline"
                color="neutral"
                size="md"
                iconOnly
                iconStart={<GeolocationIcon />}
                aria-label="Use my current location"
                onClick={handleUseLocation}
              />
            </Stack>
          </Stack>

          {locationName && (
            <Text variant="body.sm.normal">
              <span style={{ color: '#059669' }}>{locationName}</span>
            </Text>
          )}

          <Button
            variant="solid"
            color="primary"
            size="lg"
            onClick={handleNext}
            style={{ width: '100%', backgroundColor: '#EB4B4B' }}
          >
            Next
          </Button>
        </Stack>
      </main>
    </Box>
  );
}

export default ElectricianQuoteScreen;
