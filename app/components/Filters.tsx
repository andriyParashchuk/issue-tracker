"use client";

type FiltersProps = {
  onSortClick?: () => void;
  onStatusClick?: () => void;
  onPriorityClick?: () => void;
  onLabelsClick?: () => void;
};

export function Filters({
  onSortClick,
  onStatusClick,
  onPriorityClick,
  onLabelsClick,
}: FiltersProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between">
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={onSortClick}
                className="group inline-flex justify-center text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Sort
                <svg
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-slate-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-8">
              <button
                type="button"
                onClick={onStatusClick}
                className="group inline-flex items-center justify-center text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Status
              </button>

              <button
                type="button"
                onClick={onPriorityClick}
                className="group inline-flex items-center justify-center text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Priority
              </button>

              <button
                type="button"
                onClick={onLabelsClick}
                className="group inline-flex items-center justify-center text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Labels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
