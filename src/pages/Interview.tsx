import React, { useEffect, useRef } from 'react';
import { Camera, Pause, Play, ArrowRight } from 'lucide-react';
import { TbReload } from 'react-icons/tb';
import { HiDownload } from 'react-icons/hi';
import { useInterviewStore } from '../store/interview';
import { Timer } from '../components/Timer';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Analytics } from "@vercel/analytics/react";

function Interview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    companies,
    questions,
    selectedCompany,
    currentQuestionIndex,
    timeLimit,
    isRecording,
    mediaStream,
    recordedVideo,
    hasPermission,
    fetchCompanies,
    setSelectedCompany,
    setTimeLimit,
    requestPermission,
    startRecording,
    stopRecording,
    nextQuestion,
    set,
  } = useInterviewStore();

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  useEffect(() => {
    if (videoRef.current) {
      if (mediaStream && !recordedVideo) {
        videoRef.current.srcObject = mediaStream;
      } else if (recordedVideo) {
        videoRef.current.srcObject = null;
      }
    }
  }, [mediaStream, recordedVideo]);

  useEffect(() => {
    return () => {
      if (recordedVideo) {
        URL.revokeObjectURL(recordedVideo);
      }
    };
  }, [recordedVideo]);

<Analytics />

const handleDownload = () => {
  if (recordedVideo) {
    const a = document.createElement('a');
    a.href = recordedVideo; // Assumes this is a Blob URL or a valid video URL
    a.download = `interview-recording-${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">
  <a>Hirevue Practice by </a>
  <a href="https://www.linkedin.com/in/paul-lazarte/" className="text-blue-500 ">Paul</a>
</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Company
            </label>
            <select
              className="w-full p-2 rounded bg-[#363636] border border-gray-700 text-white"
              value={selectedCompany || ''}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              <option value="">Select company</option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCompany && currentQuestion && (
            <div className="bg-[#2a2a2a] rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              <div className="text-base sm:text-lg mb-4">
                {currentQuestion.question_text}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Time Limit
            </label>
            <select
              className="w-full p-2 rounded bg-[#363636] border border-gray-700 text-white"
              value={timeLimit}
              onChange={(e) => setTimeLimit(Number(e.target.value))}
            >
              <option value={60}>1 Minute</option>
              <option value={120}>2 Minutes</option>
              <option value={180}>3 Minutes</option>
            </select>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              {!hasPermission ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#363636]">
                  <Camera className="w-8 sm:w-12 h-8 sm:h-12 text-gray-500 mb-4" />
                  <button
                    onClick={requestPermission}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    Allow Camera Access
                  </button>
                </div>
              ) : recordedVideo ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  src={recordedVideo}
                />
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                />
              )}
              {isRecording && (
                <>
                  <div className="absolute top-2 right-2 flex items-center gap-2 bg-red-600 px-2 py-1 rounded-full text-xs">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Recording
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                    <Timer />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <div>
              {hasPermission &&
                !isRecording &&
                (recordedVideo ? (
                  <div className="flex gap-1">
                    <button
                      onClick={() => {
                        set({ recordedVideo: null });
                        requestPermission();
                      }}
                      className="flex-1 flex items-center justify-center px-3 sm:px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
                    >
                      <TbReload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span>Redo</span>
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex-1 flex items-center justify-center px-3 sm:px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                    >
                      <HiDownload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span>Save</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={startRecording}
                    className="w-full flex items-center justify-center px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Start Recording
                  </button>
                ))}
              {isRecording && (
                <button
                  onClick={stopRecording}
                  className="w-full flex items-center justify-center px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
                >
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Stop Recording
                </button>
              )}
            </div>
            {recordedVideo && (
              <button
                onClick={() => {
                  nextQuestion();
                  set({ recordedVideo: null });
                  requestPermission();
                }}
                className="w-full flex items-center justify-center px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                Next Question
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
