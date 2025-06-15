
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLinkInBioStore } from './useLinkInBioStore';

const ThemeSection: React.FC = () => {
  const { theme, updateTheme } = useLinkInBioStore();

  const colorPresets = [
    { name: 'Roxo Yeon', value: '#8B5CF6' },
    { name: 'Azul', value: '#3B82F6' },
    { name: 'Verde', value: '#10B981' },
    { name: 'Rosa', value: '#EC4899' },
    { name: 'Laranja', value: '#F59E0B' },
    { name: 'Vermelho', value: '#EF4444' },
  ];

  const backgroundPresets = [
    { name: 'Escuro', value: '#1a1a1a' },
    { name: 'Gradiente Escuro', value: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' },
    { name: 'Gradiente Roxo', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { name: 'Gradiente Azul', value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalização Visual</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Color Theme */}
        <div className="space-y-3">
          <Label>Cor Principal</Label>
          <div className="grid grid-cols-3 gap-2">
            {colorPresets.map((color) => (
              <button
                key={color.value}
                onClick={() => updateTheme({ primaryColor: color.value })}
                className={`h-12 rounded-lg border-2 transition-all ${
                  theme.primaryColor === color.value 
                    ? 'border-white shadow-lg scale-105' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Background */}
        <div className="space-y-3">
          <Label>Fundo</Label>
          <div className="grid grid-cols-2 gap-2">
            {backgroundPresets.map((bg, index) => (
              <button
                key={index}
                onClick={() => updateTheme({ backgroundColor: bg.value })}
                className={`h-16 rounded-lg border-2 transition-all ${
                  theme.backgroundColor === bg.value 
                    ? 'border-white shadow-lg' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ background: bg.value }}
                title={bg.name}
              >
                <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
                  {bg.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Card Style */}
        <div className="space-y-3">
          <Label>Estilo dos Cards</Label>
          <Select 
            value={theme.cardStyle} 
            onValueChange={(value: 'rounded' | 'square' | 'minimal') => 
              updateTheme({ cardStyle: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rounded">Arredondado</SelectItem>
              <SelectItem value="square">Quadrado</SelectItem>
              <SelectItem value="minimal">Minimalista</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Layout */}
        <div className="space-y-3">
          <Label>Layout</Label>
          <Select 
            value={theme.layout} 
            onValueChange={(value: 'centered' | 'left-aligned') => 
              updateTheme({ layout: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="centered">Centralizado</SelectItem>
              <SelectItem value="left-aligned">Alinhado à Esquerda</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Font Style */}
        <div className="space-y-3">
          <Label>Estilo da Fonte</Label>
          <Select 
            value={theme.fontStyle} 
            onValueChange={(value: 'modern' | 'classic' | 'bold') => 
              updateTheme({ fontStyle: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Moderno</SelectItem>
              <SelectItem value="classic">Clássico</SelectItem>
              <SelectItem value="bold">Negrito</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeSection;
