import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { ServiceProgram } from '@/data/admin';
import { Button } from '@/components/ui/button';

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (program: Omit<ServiceProgram, 'id'> | ServiceProgram) => void;
  program?: ServiceProgram;
  mode: 'add' | 'edit';
}

export function ProgramModal({ isOpen, onClose, onSave, program, mode }: ProgramModalProps) {
  const [formData, setFormData] = useState<Omit<ServiceProgram, 'id'>>({
    name: '',
    stage: 'Discover',
    nextAction: '',
    confidence: 0,
  });

  useEffect(() => {
    if (program && mode === 'edit') {
      setFormData({
        name: program.name,
        stage: program.stage,
        nextAction: program.nextAction,
        confidence: program.confidence,
      });
    } else {
      setFormData({
        name: '',
        stage: 'Discover',
        nextAction: '',
        confidence: 0,
      });
    }
  }, [program, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'edit' && program) {
      onSave({ ...formData, id: program.id } as ServiceProgram);
    } else {
      onSave(formData);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 hover:bg-slate-100 transition"
        >
          <X className="h-5 w-5 text-slate-500" />
        </button>

        <h2 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">
          {mode === 'add' ? 'Add New Program' : 'Edit Program'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Program Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="e.g., Northwind · Platform Reliability"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Stage
              </label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value as ServiceProgram['stage'] })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              >
                <option value="Discover">Discover</option>
                <option value="Stabilize">Stabilize</option>
                <option value="Automate">Automate</option>
                <option value="Scale">Scale</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confidence (0-100%)
              </label>
              <input
                type="number"
                required
                min="0"
                max="100"
                value={formData.confidence}
                onChange={(e) => setFormData({ ...formData, confidence: parseInt(e.target.value) })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Next Action
            </label>
            <input
              type="text"
              required
              value={formData.nextAction}
              onChange={(e) => setFormData({ ...formData, nextAction: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="e.g., Deploy AI noise-correlation"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90"
            >
              {mode === 'add' ? 'Add Program' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
