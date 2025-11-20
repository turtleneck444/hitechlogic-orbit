import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic, MicOff, Send, MessageCircle, Phone, PhoneOff, X, Minimize2, Maximize2, Bot, Sparkles, Zap, Shield, TrendingUp, Users, Settings, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Type declarations for Speech Recognition API
declare global {
  interface Window {
    webkitSpeechRecognition: typeof SpeechRecognition;
    SpeechRecognition: typeof SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new(): SpeechRecognition;
};

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type: 'text' | 'voice';
  suggestions?: string[];
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '👋 **Hello! I\'m your HiTechLogic AI Assistant**\n\nI\'m here to help you learn about our enterprise infrastructure solutions. I can answer questions about our services, technology, and how we transform operations.\n\n**What would you like to know?**',
      sender: 'ai',
      timestamp: new Date(),
      type: 'text',
      suggestions: [
        'Tell me about your services',
        'How does AI automation work?',
        'What industries do you serve?',
        'Cost optimization solutions'
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsRecording(true);
        setIsListening(true);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
        setIsListening(false);
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        handleSendMessage(transcript, 'voice');
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const quickActions: QuickAction[] = [
    {
      id: 'services',
      label: 'Our Services',
      icon: <Settings className="h-4 w-4" />,
      action: () => handleQuickAction('Tell me about HiTechLogic services')
    },
    {
      id: 'ai-automation',
      label: 'AI Automation',
      icon: <Bot className="h-4 w-4" />,
      action: () => handleQuickAction('How does AI business automation work?')
    },
    {
      id: 'cost-savings',
      label: 'Cost Savings',
      icon: <TrendingUp className="h-4 w-4" />,
      action: () => handleQuickAction('What cost savings can I expect?')
    },
    {
      id: 'security',
      label: 'Security',
      icon: <Shield className="h-4 w-4" />,
      action: () => handleQuickAction('How do you handle security and compliance?')
    }
  ];

  const handleQuickAction = (message: string) => {
    setInputMessage(message);
    handleSendMessage(message, 'text');
  };

  const handleSendMessage = async (content: string, type: 'text' | 'voice' = 'text') => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date(),
      type
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setShowQuickActions(false);

    try {
      // Simulate AI response - replace with actual API call
      const response = await simulateAIResponse(content);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'ai',
        timestamp: new Date(),
        type: 'text',
        suggestions: response.suggestions
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.',
        sender: 'ai',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Eleven Labs Conversational AI Integration
  const sendToElevenLabs = async (message: string, conversationHistory: Message[]): Promise<string> => {
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    const agentId = import.meta.env.VITE_ELEVEN_LABS_AGENT_ID;

    if (!apiKey) {
      throw new Error('Eleven Labs API key missing. Please check your .env file.');
    }

    try {
      // Format conversation history for Eleven Labs
      const conversationContext = conversationHistory
        .slice(-3) // Keep last 3 messages for context
        .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
        .join('\n');

      // Create the system prompt for HiTechLogic personality
      const systemPrompt = `You are Aurora, the advanced AI Assistant for HiTechLogic, a premier enterprise infrastructure solutions provider. You combine deep technical expertise with business acumen, speaking confidently about complex infrastructure challenges while making them accessible to executives and technical teams alike.

Key Guidelines:
- Be strategic, visionary, and solution-oriented
- Focus on business outcomes, not just technical details
- Use enterprise terminology (enterprise-grade, mission-critical, scalability, ROI optimization)
- Provide specific metrics and quantifiable benefits
- Always tie solutions to competitive advantage

HiTechLogic Services:
1. Infrastructure & Cloud Operations - Zero-downtime multi-cloud orchestration
2. System Oversight & Event Reduction - AI-powered monitoring and alerting
3. AI Business Automation - Intelligent infrastructure management and remediation
4. Reliability & Performance Engineering - SLO-backed operations and optimization
5. Cybersecurity & Identity Assurance - Zero-trust security frameworks
6. Cost Efficiency & Capacity Strategy - Data-driven financial optimization
7. Strategic Technology Partnership - Executive-level technology guidance
8. Rapid Prototyping & App Development - From concept to production acceleration

Response Style:
- Start with empathy and understanding
- Provide comprehensive yet concise information
- End with specific next steps or questions
- Use professional, encouraging tone
- Include relevant metrics and success indicators

Remember: You represent HiTechLogic's enterprise excellence. Every response should reinforce our position as the premier infrastructure solutions provider.`;

      // Try the Conversational AI endpoint with agent
      const requestBody = {
        message: message,
        user_id: "hitechlogic-user",
        conversation_id: "hitechlogic-session",
        ...(conversationContext && { context: conversationContext }),
        ...(systemPrompt && { system_prompt: systemPrompt })
      };

      console.log('Sending to Eleven Labs:', requestBody);

      const response = await fetch(`https://api.elevenlabs.io/v1/convai/conversations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Eleven Labs API error:', response.status, errorText);

        // Try alternative endpoint if agent-specific endpoint fails
        if (response.status === 404 || response.status === 400) {
          console.log('Trying alternative endpoint...');
          return await tryAlternativeEndpoint(message, conversationContext, systemPrompt, apiKey);
        }

        throw new Error(`Eleven Labs API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Eleven Labs response:', data);

      // Extract the AI response from various possible response formats
      if (data.response) {
        return data.response;
      }

      if (data.message) {
        return data.message;
      }

      if (data.text) {
        return data.text;
      }

      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        return data.choices[0].message.content;
      }

      return 'I received your message but couldn\'t generate a proper response.';

    } catch (error) {
      console.error('Eleven Labs API error:', error);

      // Try alternative endpoint as fallback
      try {
        console.log('Trying alternative endpoint as fallback...');
        return await tryAlternativeEndpoint(message, '', '', apiKey);
      } catch (fallbackError) {
        console.error('All Eleven Labs endpoints failed:', fallbackError);
        throw error;
      }
    }
  };

  // Alternative endpoint for conversational AI
  const tryAlternativeEndpoint = async (
    message: string,
    conversationContext: string,
    systemPrompt: string,
    apiKey: string
  ): Promise<string> => {
    // Try using OpenAI-compatible endpoint that Eleven Labs might support
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        ...(conversationContext ? [{
          role: "system",
          content: `Previous conversation:\n${conversationContext}`
        }] : []),
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 800
    };

    const response = await fetch(`https://api.elevenlabs.io/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Alternative API error:', response.status, errorText);
      throw new Error(`Alternative API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Alternative API response:', data);

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    }

    return 'I apologize, but I couldn\'t generate a response at this time.';
  };

  // Text-to-Speech using Eleven Labs
  const speakResponse = async (text: string) => {
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

    if (!apiKey || !isVoiceMode) return;

    try {
      // Use a professional voice for enterprise communication
      const voiceId = '21m00Tcm4TlvDq8ikWAM'; // Rachel voice (professional female)

      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.8,
            style: 0.5,
            use_speaker_boost: true
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`TTS API error: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();

    } catch (error) {
      console.error('Text-to-speech error:', error);
      // Don't throw error for TTS failures - voice is optional
    }
  };

  const simulateAIResponse = async (userMessage: string): Promise<{ content: string; suggestions?: string[] }> => {
    try {
      // Use real Eleven Labs API
      const aiResponse = await sendToElevenLabs(userMessage, messages);

      // Generate contextual suggestions based on the response
      const suggestions = generateSuggestions(userMessage, aiResponse);

      // Speak the response if in voice mode
      if (isVoiceMode) {
        speakResponse(aiResponse);
      }

      return {
        content: aiResponse,
        suggestions
      };

    } catch (error) {
      console.error('AI Response error:', error);

      // Fallback to intelligent responses if API fails
      const fallbackResponse = getFallbackResponse(userMessage);
      return {
        content: fallbackResponse.content,
        suggestions: fallbackResponse.suggestions
      };
    }
  };

  const generateSuggestions = (userMessage: string, aiResponse: string): string[] => {
    const message = userMessage.toLowerCase();
    const response = aiResponse.toLowerCase();

    // Context-aware suggestions based on conversation
    if (message.includes('services') || response.includes('service')) {
      return ['Infrastructure operations', 'AI automation details', 'Cost optimization', 'Security solutions'];
    }

    if (message.includes('ai') || message.includes('automation') || response.includes('automation')) {
      return ['Implementation process', 'Case studies', 'Technical details', 'ROI examples'];
    }

    if (message.includes('cost') || response.includes('cost')) {
      return ['Current cost analysis', 'Optimization strategies', 'ROI calculator', 'Success stories'];
    }

    if (message.includes('security') || response.includes('security')) {
      return ['Compliance requirements', 'Threat detection', 'Access management', 'Security audits'];
    }

    // Default contextual suggestions
    return ['Service comparison', 'Getting started', 'Contact a specialist', 'Schedule consultation'];
  };

  const getFallbackResponse = (userMessage: string): { content: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();

    if (message.includes('services') || message.includes('what do you do')) {
      return {
        content: `🚀 **HiTechLogic Services Overview**\n\nWe provide comprehensive enterprise infrastructure solutions through our **Eight Service Pillars**:\n\n**Core Services:**\n• **Infrastructure & Cloud Operations** - Zero-downtime deployments\n• **System Oversight & Event Reduction** - AI-powered monitoring\n• **AI Business Automation** - Intelligent infrastructure management\n• **Reliability & Performance Engineering** - SLO-backed operations\n• **Cybersecurity & Identity Assurance** - Zero-trust security\n• **Cost Efficiency & Capacity Strategy** - Data-driven optimization\n• **Strategic Technology Partnership** - Executive-level guidance\n• **Rapid Prototyping & App Development** - From idea to production\n\nEach service is designed to work together for maximum business impact. **What specific area interests you most?**`,
        suggestions: ['Infrastructure operations', 'AI automation details', 'Cost optimization', 'Security solutions']
      };
    }

    return {
      content: `Thank you for your question! As your HiTechLogic AI Assistant, I'm here to help you understand how our enterprise infrastructure solutions can transform your operations.\n\n**I can help with:**\n• Service overviews and technical details\n• Cost optimization strategies\n• Security and compliance guidance\n• Implementation planning\n• Case studies and success metrics\n\n**What specific aspect of our solutions would you like to explore?**`,
      suggestions: ['Service comparison', 'Getting started', 'Contact a specialist', 'Schedule consultation']
    };
  };

  const handleVoiceToggle = () => {
    if (!recognitionRef.current) {
      alert('Voice recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  const toggleVoiceMode = () => {
    setIsVoiceMode(!isVoiceMode);
    if (isRecording) {
      recognitionRef.current?.stop();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[9999] group">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Bot className="h-6 w-6 text-gray-700" />
        </Button>

        {/* Clean tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg z-[10000]">
          <span>Chat with AI Assistant</span>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-[9999] transition-all duration-500 ease-out",
      isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
    )}>
      {/* Clean Header */}
      <div className="bg-white border border-gray-200 rounded-t-2xl px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Bot className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">HiTechLogic AI</h3>
              <p className="text-xs text-gray-500">
                {isTyping ? 'Typing...' : 'Online'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleVoiceMode}
              className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
            >
              {isVoiceMode ? <Phone className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Body */}
      {!isMinimized && (
        <div className="bg-white border-x border-b border-gray-200 rounded-b-2xl shadow-sm h-[436px] flex flex-col">
          {/* Quick Actions */}
          {showQuickActions && messages.length === 1 && (
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Quick Actions</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.id}
                    variant="outline"
                    size="sm"
                    onClick={action.action}
                    className="h-auto p-3 text-left justify-start border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                        {action.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-700">{action.label}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={message.id}>
                  <div
                    className={cn(
                      "flex",
                      message.sender === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-3",
                        message.sender === 'user'
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-900"
                      )}
                    >
                      {/* Message Header */}
                      {message.sender === 'ai' && (
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="h-3 w-3 text-gray-500" />
                          <span className="text-xs font-medium text-gray-600">HiTechLogic AI</span>
                        </div>
                      )}

                      {/* Voice indicator */}
                      {message.type === 'voice' && message.sender === 'user' && (
                        <div className="flex items-center gap-1 mb-2 text-xs opacity-80">
                          <Mic className="h-3 w-3" />
                          <span>Voice message</span>
                        </div>
                      )}

                      {/* Message Content */}
                      <div className="text-sm leading-relaxed whitespace-pre-line">
                        {message.content}
                      </div>

                      {/* Timestamp */}
                      <p className={cn(
                        "text-xs mt-2 opacity-70",
                        message.sender === 'user' ? "text-right" : "text-left"
                      )}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>

                  {/* Suggestions */}
                  {message.sender === 'ai' && message.suggestions && index === messages.length - 1 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickAction(suggestion)}
                          className="h-8 px-3 text-xs border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors rounded-full"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Bot className="h-3 w-3 text-gray-500" />
                      <span className="text-xs font-medium text-gray-600">HiTechLogic AI</span>
                    </div>
                    <div className="flex space-x-1 mt-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100">
            {isVoiceMode ? (
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleVoiceToggle}
                  className={cn(
                    "flex-1 h-11 rounded-full transition-colors",
                    isRecording
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  )}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Listening...</span>
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Tap to Speak</span>
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={toggleVoiceMode}
                  className="h-11 px-4 rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage(inputMessage)}
                    placeholder="Ask me anything about HiTechLogic..."
                    className="h-11 pr-12 rounded-full border-gray-200 focus:border-gray-300 focus:ring-gray-300 bg-gray-50"
                  />
                  {inputMessage && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setInputMessage('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0 rounded-full hover:bg-gray-200"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  )}
                </div>

                <Button
                  onClick={() => handleSendMessage(inputMessage)}
                  disabled={!inputMessage.trim() || isTyping}
                  className="h-11 w-11 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                  <Send className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  onClick={toggleVoiceMode}
                  className="h-11 px-4 rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-center mt-3 text-xs text-gray-400">
              <span>Powered by HiTechLogic AI</span>
              <button
                onClick={() => setMessages([messages[0]])}
                className="ml-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                Clear chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
