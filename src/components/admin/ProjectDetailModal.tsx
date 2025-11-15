import { X, Calendar, Users, DollarSign, Tag, FileText, CheckCircle2, Clock, TrendingUp, Upload, Plus, Edit2, Trash2 } from 'lucide-react';
import type { Project } from '@/data/admin';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!isOpen || !project) return null;

  const completedMilestones = project.milestones.filter(m => m.completed).length;
  const totalMilestones = project.milestones.length;
  const progressPercent = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-2xl animate-scale-in">
        {/* Header */}
        <div className={`relative p-8 bg-gradient-to-br ${project.color} overflow-hidden`}>
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
          <div className="relative flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
                  project.priority === 'critical' ? 'bg-red-100 text-red-700 border-2 border-red-200' :
                  project.priority === 'high' ? 'bg-orange-100 text-orange-700 border-2 border-orange-200' :
                  project.priority === 'medium' ? 'bg-blue-100 text-blue-700 border-2 border-blue-200' :
                  'bg-slate-100 text-slate-700 border-2 border-slate-200'
                }`}>
                  {project.priority} Priority
                </span>
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
                  project.status === 'completed' ? 'bg-green-100 text-green-700 border-2 border-green-200' :
                  project.status === 'in-progress' ? 'bg-blue-100 text-blue-700 border-2 border-blue-200' :
                  project.status === 'on-hold' ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-200' :
                  project.status === 'cancelled' ? 'bg-red-100 text-red-700 border-2 border-red-200' :
                  'bg-slate-100 text-slate-700 border-2 border-slate-200'
                }`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>
              <h2 className="text-3xl font-black text-[hsl(var(--navy))] mb-2">{project.title}</h2>
              <p className="text-slate-600 font-semibold">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-red-100 hover:text-red-600 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Due Date</span>
              </div>
              <p className="text-lg font-black text-[hsl(var(--navy))]">
                {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Budget</span>
              </div>
              <p className="text-lg font-black text-[hsl(var(--navy))]">{project.budget}</p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Team</span>
              </div>
              <p className="text-lg font-black text-[hsl(var(--navy))]">{project.team.length} Members</p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Progress</span>
              </div>
              <p className="text-lg font-black text-[hsl(var(--navy))]">{project.progress}%</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 p-6 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-600">Overall Progress</span>
              <span className="text-2xl font-black text-[hsl(var(--accent-blue))]">{project.progress}%</span>
            </div>
            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${project.color} relative overflow-hidden transition-all duration-500`}
                style={{ width: `${project.progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Client Info */}
          <div className="mb-8 p-6 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-blue-50/30 to-white">
            <h3 className="text-lg font-black text-[hsl(var(--navy))] mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
              Client Information
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--accent-blue))]/10">
                <span className="text-sm font-bold text-[hsl(var(--accent-blue))]">
                  {project.clientName.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-black text-[hsl(var(--navy))]">{project.clientName}</p>
                <p className="text-xs text-slate-500 font-semibold">Primary Client</p>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[hsl(var(--navy))] flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                Milestones ({completedMilestones}/{totalMilestones})
              </h3>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] text-sm font-bold hover:bg-[hsl(var(--accent-blue))]/20 transition-all">
                <Plus className="h-4 w-4" />
                Add Milestone
              </button>
            </div>
            <div className="space-y-3">
              {project.milestones.map((milestone, index) => (
                <div key={milestone.id} className={`group p-5 rounded-2xl border-2 ${milestone.completed ? 'border-green-200 bg-green-50/50' : 'border-slate-100 bg-white'} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${milestone.completed ? 'bg-green-600' : 'bg-slate-300'}`}>
                          {milestone.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-white" />
                          ) : (
                            <Clock className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <h4 className={`text-sm font-black ${milestone.completed ? 'text-green-900' : 'text-[hsl(var(--navy))]'}`}>
                          {milestone.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold ml-9 mb-2">{milestone.description}</p>
                      <div className="flex items-center gap-4 ml-9">
                        <span className="text-xs font-bold text-slate-500">
                          Due: {new Date(milestone.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        {milestone.completed && milestone.completedAt && (
                          <span className="text-xs font-bold text-green-600">
                            ✓ Completed {new Date(milestone.completedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-all">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-all">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[hsl(var(--navy))] flex items-center gap-2">
                <FileText className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                Documents ({project.documents.length})
              </h3>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] text-sm font-bold hover:bg-[hsl(var(--accent-blue))]/20 transition-all">
                <Upload className="h-4 w-4" />
                Upload Document
              </button>
            </div>
            {project.documents.length > 0 ? (
              <div className="grid gap-3">
                {project.documents.map((doc) => (
                  <div key={doc.id} className="group p-4 rounded-2xl border-2 border-slate-100 bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-[hsl(var(--navy))] truncate">{doc.name}</p>
                          <p className="text-xs text-slate-500 font-semibold">
                            {doc.size} • Uploaded by {doc.uploadedBy} on {doc.uploadedAt}
                          </p>
                        </div>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-red-50 text-red-600 transition-all">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-center">
                <p className="text-sm font-semibold text-slate-500">No documents uploaded yet</p>
              </div>
            )}
          </div>

          {/* Team Members */}
          <div className="mb-8">
            <h3 className="text-lg font-black text-[hsl(var(--navy))] mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
              Team Members ({project.team.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.team.map((member, index) => (
                <div key={index} className="p-4 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-all text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent-blue))]/10 mx-auto mb-2">
                    <span className="text-sm font-bold text-[hsl(var(--accent-blue))]">
                      {member.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-[hsl(var(--navy))]">{member}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          {project.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-black text-[hsl(var(--navy))] mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-bold bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] border-2 border-[hsl(var(--accent-blue))]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
