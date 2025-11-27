import { useState } from "react";
import { CloseIcon } from "./Icons";

interface NSFWWarningModalProps {
  onProceed: () => void;
  onGoBack: () => void;
}

export default function NSFWWarningModal({
  onProceed,
  onGoBack,
}: NSFWWarningModalProps) {
  const [agreedToAge, setAgreedToAge] = useState(false);
  const [agreedToContent, setAgreedToContent] = useState(false);
  const [agreedToView, setAgreedToView] = useState(false);

  const allAgreed = agreedToAge && agreedToContent && agreedToView;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-red-950 border-2 border-red-600 rounded-xl w-full max-w-md p-8 shadow-2xl shadow-red-600/30 animate-fadeIn">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-black text-red-400 mb-2">
              ⚠️ NSFW Warning
            </h2>
            <p className="text-sm text-red-200">Age Verification Required</p>
          </div>
          <button
            onClick={onGoBack}
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="bg-red-900/30 border border-red-600/50 rounded-lg p-5 mb-6">
          <p className="text-sm text-red-100 mb-4">
            This content contains material that is{" "}
            <strong>Not Safe For Work (NSFW)</strong>. By proceeding, you
            confirm that:
          </p>

          {/* Checkboxes */}
          <div className="space-y-3">
            {/* Age Check */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreedToAge}
                onChange={(e) => setAgreedToAge(e.target.checked)}
                className="w-5 h-5 accent-red-500 rounded mt-0.5 cursor-pointer"
              />
              <span className="text-sm text-red-100 group-hover:text-red-50 transition-colors">
                <strong>1. You are at least 18 years old</strong>
              </span>
            </label>

            {/* Content Warning */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreedToContent}
                onChange={(e) => setAgreedToContent(e.target.checked)}
                className="w-5 h-5 accent-red-500 rounded mt-0.5 cursor-pointer"
              />
              <span className="text-sm text-red-100 group-hover:text-red-50 transition-colors">
                <strong>
                  2. You understand the content may be inappropriate
                </strong>
              </span>
            </label>

            {/* Willingness */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreedToView}
                onChange={(e) => setAgreedToView(e.target.checked)}
                className="w-5 h-5 accent-red-500 rounded mt-0.5 cursor-pointer"
              />
              <span className="text-sm text-red-100 group-hover:text-red-50 transition-colors">
                <strong>3. You are willing to view adult content</strong>
              </span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onGoBack}
            className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all active:scale-95"
          >
            Go Back
          </button>
          <button
            onClick={onProceed}
            disabled={!allAgreed}
            className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all active:scale-95"
          >
            Proceed
          </button>
        </div>

        {/* Helper Text */}
        {!allAgreed && (
          <p className="text-xs text-red-300 mt-4 text-center">
            Please confirm all three statements to proceed
          </p>
        )}
      </div>
    </div>
  );
}
