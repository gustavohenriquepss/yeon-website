
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';

const EventsSection: React.FC = () => {
  const { events, addEvent, removeEvent } = useLinkInBioStore();
  const [newName, setNewName] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newVenue, setNewVenue] = useState('');
  const [newTicketUrl, setNewTicketUrl] = useState('');

  const handleAddEvent = () => {
    if (newName && newDate && newVenue) {
      addEvent({ 
        name: newName, 
        date: newDate, 
        venue: newVenue,
        ticketUrl: newTicketUrl || undefined
      });
      setNewName('');
      setNewDate('');
      setNewVenue('');
      setNewTicketUrl('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-sm">{event.name}</p>
              <p className="text-xs text-muted-foreground">{event.date} • {event.venue}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeEvent(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-4 border-t">
        <Label>Adicionar Evento</Label>
        
        <div>
          <Label htmlFor="event-name">Nome do Evento</Label>
          <Input
            id="event-name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nome do show/evento"
          />
        </div>

        <div>
          <Label htmlFor="event-date">Data</Label>
          <Input
            id="event-date"
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="event-venue">Local</Label>
          <Input
            id="event-venue"
            value={newVenue}
            onChange={(e) => setNewVenue(e.target.value)}
            placeholder="Nome do local e cidade"
          />
        </div>

        <div>
          <Label htmlFor="ticket-url">Link de Ingressos (opcional)</Label>
          <Input
            id="ticket-url"
            value={newTicketUrl}
            onChange={(e) => setNewTicketUrl(e.target.value)}
            placeholder="URL para compra de ingressos"
          />
        </div>
        
        <Button onClick={handleAddEvent} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Evento
        </Button>
      </div>
    </div>
  );
};

export default EventsSection;
