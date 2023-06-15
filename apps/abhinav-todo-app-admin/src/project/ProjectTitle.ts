import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "owners";

export const ProjectTitle = (record: TProject): string => {
  return record.owners || String(record.id);
};
