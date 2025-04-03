const fs = require("fs");

const names = [
  "Lương tháng",
  "Thưởng hiệu suất",
  "Thu nhập từ đầu tư",
  "Lợi nhuận kinh doanh",
  "Tiền hoàn thuế",
  "Lãi suất ngân hàng",
  "Thu nhập từ cho thuê nhà",
  "Bán tài sản cá nhân",
  "Hoa hồng bán hàng",
  "Quà tặng tiền mặt",
  "Trợ cấp xã hội",
  "Tiền hỗ trợ từ gia đình",
  "Doanh thu bán hàng",
  "Thu nhập từ dịch vụ tư vấn",
  "Thu nhập từ sáng tạo nội dung",
  "Lãi suất từ cổ phiếu",
  "Tiền hoàn từ mua sắm",
  "Phụ cấp công tác",
  "Thu nhập từ tiền bản quyền",
  "Tiền hỗ trợ học phí",
  "Học bổng",
  "Tiền bảo hiểm chi trả",
  "Thu nhập từ dự án phụ",
  "Tiền trợ cấp nuôi con",
  "Tiền thưởng dự án",
  "Phí bảo trì thiết bị",
  "Thu nhập từ hợp đồng quảng cáo",
  "Tiền hoa hồng tiếp thị liên kết",
  "Tiền trúng thưởng xổ số",
  "Tiền đầu tư mạo hiểm",
  "Chi phí thuê nhà",
  "Chi phí sinh hoạt hàng ngày",
  "Chi phí điện nước",
  "Chi phí internet",
  "Tiền xăng xe",
  "Tiền bảo trì xe cộ",
  "Tiền mua sắm cá nhân",
  "Chi phí ăn uống",
  "Tiền giải trí",
  "Chi phí du lịch",
  "Tiền khám chữa bệnh",
  "Chi phí bảo hiểm y tế",
  "Chi phí học tập",
  "Tiền đóng học phí",
  "Chi phí sách vở",
  "Chi phí đào tạo kỹ năng",
  "Phí dịch vụ ngân hàng",
  "Tiền phí giao dịch thẻ tín dụng",
  "Tiền phí rút tiền ATM",
  "Chi phí pháp lý",
  "Chi phí thuê luật sư",
  "Tiền thuế thu nhập cá nhân",
  "Tiền thuế kinh doanh",
  "Chi phí marketing",
  "Chi phí chạy quảng cáo",
  "Tiền đầu tư quảng bá sản phẩm",
  "Chi phí thuê nhân viên",
  "Tiền trả lương nhân viên",
  "Chi phí phúc lợi nhân viên",
  "Tiền mua thiết bị văn phòng",
  "Chi phí thuê văn phòng",
  "Tiền sửa chữa thiết bị",
  "Tiền vận chuyển hàng hóa",
  "Chi phí kho bãi",
  "Chi phí tiếp khách",
  "Tiền từ thiện",
  "Chi phí mua quà tặng",
  "Chi phí tổ chức sự kiện",
  "Chi phí phát triển phần mềm",
  "Chi phí bảo trì website",
  "Tiền nâng cấp phần mềm",
  "Chi phí hỗ trợ kỹ thuật",
  "Tiền bản quyền phần mềm",
  "Tiền duy trì hệ thống máy chủ",
  "Chi phí bảo mật dữ liệu",
  "Tiền phí thuê tư vấn doanh nghiệp",
  "Chi phí kiểm toán tài chính",
  "Chi phí nghiên cứu thị trường",
  "Chi phí phát triển sản phẩm",
  "Tiền trả góp mua nhà",
  "Tiền trả góp mua xe",
  "Chi phí đầu tư bất động sản",
  "Chi phí đầu tư vàng",
  "Tiền gửi tiết kiệm",
  "Tiền phí vay tín dụng",
  "Chi phí lãi suất vay ngân hàng",
  "Tiền bảo hiểm xe",
  "Tiền bảo hiểm nhà",
  "Tiền phí thành viên câu lạc bộ",
  "Chi phí tham gia hội thảo",
  "Chi phí nâng cấp hệ thống IT",
  "Tiền thưởng nhân viên xuất sắc",
  "Tiền mua nguyên vật liệu",
  "Chi phí kiểm tra chất lượng",
  "Chi phí vận hành doanh nghiệp",
  "Chi phí logistics",
  "Tiền sửa chữa nhà",
  "Chi phí an ninh doanh nghiệp",
  "Tiền chi trả trợ cấp thất nghiệp",
  "Chi phí đào tạo nhân viên",
];

const descriptions = [
  "Thu nhập từ tiền lương hàng tháng.",
  "Thưởng dành cho nhân viên có hiệu suất cao.",
  "Lợi nhuận từ các khoản đầu tư chứng khoán.",
  "Lợi nhuận thu được từ hoạt động kinh doanh.",
  "Khoản tiền hoàn thuế từ cơ quan thuế.",
  "Lãi suất từ khoản tiết kiệm ngân hàng.",
  "Tiền thu được từ cho thuê nhà hoặc căn hộ.",
  "Doanh thu từ việc bán tài sản cá nhân.",
  "Hoa hồng nhận được từ bán hàng.",
  "Nhận quà tặng bằng tiền mặt từ người thân.",
  "Nhận trợ cấp từ chính phủ hoặc tổ chức xã hội.",
  "Khoản hỗ trợ tài chính từ gia đình.",
  "Thu nhập từ việc bán sản phẩm hoặc dịch vụ.",
  "Tiền nhận được từ dịch vụ tư vấn chuyên môn.",
  "Khoản thu nhập từ sáng tạo nội dung số.",
  "Lợi nhuận từ đầu tư vào cổ phiếu và trái phiếu.",
  "Khoản tiền hoàn lại từ các giao dịch mua sắm.",
  "Phụ cấp công tác khi đi làm xa.",
  "Khoản thu nhập từ tiền bản quyền sách, nhạc, phim.",
  "Khoản hỗ trợ học phí từ các tổ chức giáo dục.",
  "Nhận học bổng từ trường học hoặc tổ chức tài trợ.",
  "Khoản tiền bảo hiểm chi trả khi gặp rủi ro.",
  "Thu nhập từ dự án phụ hoặc công việc tự do.",
  "Khoản trợ cấp nuôi con từ chính phủ hoặc gia đình.",
  "Tiền thưởng khi hoàn thành dự án quan trọng.",
  "Khoản phí bảo trì thiết bị trong công ty.",
  "Tiền thu từ hợp đồng quảng cáo với doanh nghiệp.",
  "Hoa hồng nhận được từ tiếp thị liên kết.",
  "Khoản tiền trúng thưởng từ xổ số hoặc chương trình khuyến mãi.",
  "Lợi nhuận từ đầu tư vào các dự án khởi nghiệp.",
  "Chi phí hàng tháng dành cho thuê nhà ở.",
  "Khoản tiền chi tiêu cho nhu yếu phẩm hàng ngày.",
  "Thanh toán hóa đơn điện, nước mỗi tháng.",
  "Khoản chi phí dành cho internet và truyền hình cáp.",
  "Tiền mua xăng dầu để sử dụng phương tiện cá nhân.",
  "Chi phí bảo trì xe cộ để đảm bảo an toàn.",
  "Khoản chi tiêu cho quần áo, giày dép và phụ kiện.",
  "Chi phí ăn uống hàng ngày tại nhà và nhà hàng.",
  "Khoản tiền dành cho hoạt động vui chơi giải trí.",
  "Chi phí đi du lịch và nghỉ dưỡng.",
  "Tiền khám bệnh và mua thuốc điều trị.",
  "Chi phí đóng bảo hiểm y tế cá nhân hoặc gia đình.",
  "Khoản chi tiêu cho việc học tập và đào tạo.",
  "Học phí dành cho các khóa học tại trường.",
  "Tiền mua sách vở, tài liệu phục vụ học tập.",
  "Khoản đầu tư vào các khóa đào tạo kỹ năng.",
  "Phí sử dụng dịch vụ ngân hàng hàng tháng.",
  "Chi phí giao dịch thẻ tín dụng.",
  "Phí rút tiền từ ATM khi giao dịch.",
  "Khoản chi phí thuê luật sư giải quyết vấn đề pháp lý.",
  "Khoản thanh toán thuế thu nhập cá nhân.",
  "Khoản thuế kinh doanh hàng năm.",
  "Chi phí tiếp thị, quảng cáo thương hiệu.",
  "Chi phí chạy quảng cáo trên nền tảng số.",
  "Khoản tiền đầu tư vào chiến dịch quảng bá.",
  "Chi phí thuê nhân viên mới.",
  "Tiền lương nhân viên hàng tháng.",
  "Chi phí phúc lợi xã hội dành cho nhân viên.",
  "Khoản chi tiêu mua thiết bị văn phòng.",
  "Chi phí thuê mặt bằng làm việc.",
  "Khoản tiền sửa chữa thiết bị hỏng hóc.",
  "Chi phí vận chuyển hàng hóa đến khách hàng.",
  "Chi phí lưu kho và bảo quản hàng hóa.",
  "Tiền tiếp khách, gặp gỡ đối tác.",
  "Khoản quyên góp từ thiện cho các tổ chức.",
  "Chi phí mua quà tặng cho khách hàng và đối tác.",
  "Chi phí tổ chức hội nghị và sự kiện.",
  "Tiền đầu tư vào phát triển phần mềm.",
  "Khoản phí bảo trì hệ thống website.",
  "Chi phí nâng cấp và cải tiến phần mềm.",
  "Tiền thuê chuyên gia hỗ trợ kỹ thuật.",
  "Chi phí trả tiền bản quyền phần mềm.",
  "Khoản tiền duy trì hệ thống máy chủ.",
  "Chi phí bảo mật và an toàn dữ liệu.",
  "Tiền thuê tư vấn chiến lược kinh doanh.",
  "Chi phí kiểm toán tài chính hàng năm.",
  "Khoản chi tiêu cho nghiên cứu thị trường.",
  "Tiền đầu tư phát triển sản phẩm mới.",
  "Khoản trả góp mua nhà hàng tháng.",
  "Tiền trả góp mua xe ô tô.",
  "Chi phí đầu tư vào bất động sản.",
  "Khoản tiền đầu tư mua vàng và kim loại quý.",
  "Số tiền gửi tiết kiệm dài hạn.",
  "Chi phí trả lãi suất khi vay tín dụng.",
  "Khoản lãi suất phải trả khi vay ngân hàng.",
  "Tiền đóng bảo hiểm cho xe ô tô.",
  "Chi phí mua bảo hiểm nhà ở.",
  "Khoản phí duy trì hội viên câu lạc bộ.",
  "Chi phí tham gia các hội thảo chuyên môn.",
  "Tiền đầu tư nâng cấp hệ thống công nghệ thông tin.",
  "Khoản tiền thưởng cho nhân viên xuất sắc.",
  "Chi phí mua nguyên vật liệu cho sản xuất.",
  "Khoản tiền kiểm tra chất lượng sản phẩm.",
  "Chi phí vận hành và duy trì hoạt động công ty.",
  "Khoản phí cho hoạt động logistics và vận chuyển.",
  "Tiền sửa chữa, nâng cấp nhà ở.",
  "Chi phí bảo đảm an ninh trong công ty.",
  "Khoản trợ cấp thất nghiệp dành cho nhân viên.",
  "Chi phí tổ chức đào tạo nhân sự mới.",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function generateRandomData() {
  return names.map((name) => ({
    description: getRandomElement(descriptions),
    kind: getRandomInt(1, 2),
    name,
  }));
}

function jsonToCsv(data) {
  const headers = Object.keys(data[0]);
  const rows = data.map((row) =>
    headers.map((header) => `"${row[header]}"`).join(",")
  );
  return [headers.join(","), ...rows].join("\n");
}

function saveToCsv(fileName) {
  const data = generateRandomData();
  const csvContent = jsonToCsv(data);
  fs.writeFileSync(fileName, csvContent, "utf8");
  console.log(`File CSV đã được tạo: ${fileName}`);
}

const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "");
const fileName = `category_${timestamp}.csv`;
saveToCsv(fileName);
