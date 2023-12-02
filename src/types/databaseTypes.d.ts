interface note {
  notes: string[] | undefined;
}

interface activities {
  activity: Object | undefined;
}

export interface NinjaData {
  id: number | undefined;
  name: string | undefined;
  currentActivity: number | undefined;
  currentBelt: number | undefined;
  [notes: string]: note;
}

export interface CompiledData {
  id: number | undefined;
  name: string | undefined;
  currentActivity: number | undefined;
  currentBelt: number | undefined;
  progress: activities;
};
