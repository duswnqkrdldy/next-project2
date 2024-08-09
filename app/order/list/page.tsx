"use client";
import React, { useState } from "react";

const Home = () => {
  const [orderType, setOrderType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    // 필터링 로직을 추가하세요
    console.log("Filtering orders with:", { orderType, startDate, endDate });
  };

  return (
    <main className=" container px-9 block">
      <span className="pt-3 text-lg font-semibold px-3 pb-4 flex">
        전체주문목록
      </span>

      <div>
        {/* 주문일 등 상세검색 */}
        <div className="bg-gray-100 p-4 mb-4 shadow-md  mx-auto flex">
          <div className="mb-4 mx-6">
            <label className="block text-gray-700">주문유형:</label>
            <select
              className="mt-1 block w-full"
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
            >
              <option value="">전체</option>
              <option value="order">주문</option>
              <option value="return">반품</option>
              <option value="cancel">취소</option>
            </select>
          </div>
          <div className="mb-4 mx-6">
            <label className="block text-gray-700">주문일시:</label>
            <div className="flex space-x-2">
              <input
                type="date"
                className="mt-1 block w-full"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span className="mt-2">~</span>
              <input
                type="date"
                className="mt-1 block w-full"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleFilter}
            className="mt-4 mx-6  text-sm bg-gray-700 text-white py-2 px-4 rounded-lg block hover:bg-gray-600 border-2 h-11"
          >
            필터 적용
          </button>
        </div>

        {/* 주문목록리스트출력 */}
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-300  ">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                번호
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                주문유형
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                주문일시
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                주문번호
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                상품정보
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                주문고객
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                결제금액
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                결재상태
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                주문 및 배송상태
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap" colSpan={9}>
                <a
                  href="/order/detail"
                  className="text-blue-600 hover:text-blue-900"
                >
                  리스트 상세페이지
                </a>
              </td>
            </tr>
            {/* 여기에 다른 주문 목록 항목 추가 */}
          </tbody>
        </table>
        <div>
          <p className="mt-4">배송정보</p>
        </div>
        <div>
          <p className="mt-4">결재정보</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
