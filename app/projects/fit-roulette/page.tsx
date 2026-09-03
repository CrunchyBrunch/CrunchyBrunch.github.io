import { getProjectMetadata, ProjectDetail } from "../../../components/project-detail";
import { getProject } from "../../../data/projects";
const project = getProject("fit-roulette");
export const metadata = getProjectMetadata(project);
export default function Page() { return <ProjectDetail project={project} />; }
