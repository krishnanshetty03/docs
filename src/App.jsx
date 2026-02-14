import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import WhatIsLindy from './pages/WhatIsspinabot'
import Quickstart from './pages/Quickstart'
import WorkflowOverview from './pages/WorkflowOverview'
import AiWorkflowGenerator from './pages/AiWorkflowGenerator'
import CredentialsManagement from './pages/CredentialsManagement'
import ExecutionsDashboard from './pages/ExecutionsDashboard'
import ModesAvailable from './pages/ModesAvailable'
import Community from './pages/Community'
import UseCases from './pages/UseCases'
import ChatbotOverview from './pages/ChatbotOverview'
import ProductionReadyChatbot from './pages/ProductionReadyChatbot'
import AiAvatarVoice from './pages/AiAvatarVoice'
import VoiceAgentsOverview from './pages/VoiceAgentsOverview'
import HowToCreateVoiceAgent from './pages/HowToCreateVoiceAgent'
import ScheduleCalls from './pages/ScheduleCalls'
import VoiceAgentsUseCases from './pages/VoiceAgentsUseCases'
import MeetingSMS from './pages/workflows'
import AdHocTasks from './pages/AdHocTasks'
import EmailTriage from './pages/EmailTriage'
import EmailDrafting from './pages/EmailDrafting'
import MeetingPrep from './pages/MeetingPrep'
import MeetingNotes from './pages/MeetingNotes'
import FollowUps from './pages/FollowUps'
import SmartScheduling from './pages/SmartScheduling'
import DomainAgents from './pages/DomainAgents'
import Testing from './pages/Testing'
import AssistantsBilling from './pages/AssistantsBilling'
import Skills from './pages/Skills'
import Utilities from './pages/Utilities'
import WebScraping from './pages/WebScraping'
import Integrations from './pages/Integrations'
import EmailClassifier from './pages/EmailClassifier'
import LinkedinAI from './pages/LinkedinAI'
import LeadgenAI from './pages/LeadgenAI'
import AcademicInstitutions from './pages/AcademicInstitutions'
import Construction from './pages/Construction'
import Government from './pages/Government'
import Healthcare from './pages/Healthcare'
import HumanResources from './pages/HumanResources'
import Marketing from './pages/Marketing'
import NonProfitsNGOs from './pages/NonProfitsNGOs'
import TrainingPartners from './pages/TrainingPartners'
import EcommerceRetail from './pages/EcommerceRetail'
import RealEstate from './pages/RealEstate'
import FinancialServices from './pages/FinancialServices'
import Manufacturing from './pages/Manufacturing'
import LegalServices from './pages/LegalServices'
import HospitalityTourism from './pages/HospitalityTourism'
import Telecommunications from './pages/Telecommunications'
import MediaEntertainment from './pages/MediaEntertainment'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<WhatIsLindy />} />
                <Route path="/what-is-lindy" element={<WhatIsLindy />} />
                <Route path="/quickstart" element={<Quickstart />} />
                <Route path="/workflow-overview" element={<WorkflowOverview />} />
                <Route path="/ai-workflow-generator" element={<AiWorkflowGenerator />} />
                <Route path="/credentials-management" element={<CredentialsManagement />} />
                <Route path="/executions-dashboard" element={<ExecutionsDashboard />} />
                <Route path="/modes-available" element={<ModesAvailable />} />
                <Route path="/community" element={<Community />} />
                <Route path="/use-cases" element={<UseCases />} />
                <Route path="/chatbot-overview" element={<ChatbotOverview />} />
                <Route path="/production-ready-chatbot" element={<ProductionReadyChatbot />} />
                <Route path="/ai-avatar-voice" element={<AiAvatarVoice />} />
                <Route path="/voice-agents-overview" element={<VoiceAgentsOverview />} />
                <Route path="/how-to-create-voice-agent" element={<HowToCreateVoiceAgent />} />
                <Route path="/schedule-calls" element={<ScheduleCalls />} />
                <Route path="/voice-agents-use-cases" element={<VoiceAgentsUseCases />} />
                <Route path="/meeting-sms" element={<MeetingSMS />} />
                <Route path="/ad-hoc-tasks" element={<AdHocTasks />} />
                <Route path="/email-triage" element={<EmailTriage />} />
                <Route path="/email-drafting" element={<EmailDrafting />} />
                <Route path="/meeting-prep" element={<MeetingPrep />} />
                <Route path="/meeting-notes" element={<MeetingNotes />} />
                <Route path="/follow-ups" element={<FollowUps />} />
                <Route path="/smart-scheduling" element={<SmartScheduling />} />
                <Route path="/domain-agents" element={<DomainAgents />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="/assistants-billing" element={<AssistantsBilling />} />
                <Route path="/use-cases" element={<UseCases />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/utilities" element={<Utilities />} />
                <Route path="/web-scraping" element={<WebScraping />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/email-classifier" element={<EmailClassifier />} />
                <Route path="/linkedin-ai" element={<LinkedinAI />} />
                <Route path="/leadgen-ai" element={<LeadgenAI />} />
                <Route path="/academic-institutions" element={<AcademicInstitutions />} />
                <Route path="/construction" element={<Construction />} />
                <Route path="/government" element={<Government />} />
                <Route path="/healthcare" element={<Healthcare />} />
                <Route path="/human-resources" element={<HumanResources />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/non-profits-ngos" element={<NonProfitsNGOs />} />
                <Route path="/training-partners" element={<TrainingPartners />} />
                <Route path="/ecommerce-retail" element={<EcommerceRetail />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/financial-services" element={<FinancialServices />} />
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/legal-services" element={<LegalServices />} />
                <Route path="/hospitality-tourism" element={<HospitalityTourism />} />
                <Route path="/telecommunications" element={<Telecommunications />} />
                <Route path="/media-entertainment" element={<MediaEntertainment />} />
            </Routes>
        </Layout>
    )
}

export default App
