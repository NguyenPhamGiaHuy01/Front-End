const upload_preset = "project-1";
const cloud_name = "dlexq57bx";
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

export const uploadImageToCloudinary = async (file) => {
  try {
    // Xác thực loại tệp (tùy chọn nhưng được khuyến nghị)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Loại tệp không được hỗ trợ. Vui lòng tải lên ảnh JPEG, PNG hoặc GIF.');
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);
    formData.append("cloud_name", cloud_name);

    const response = await fetch(api_url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Tải lên Cloudinary thất bại với trạng thái ${response.status}`);
    }

    const fileData = await response.json();
    return fileData.secure_url || fileData.url; // Trả về URL an toàn nếu có
  } catch (error) {
    console.error('Lỗi khi tải lên ảnh lên Cloudinary:', error);
    // Xử lý lỗi một cách khéo léo, ví dụ: hiển thị thông báo lỗi cho người dùng
    throw error; // Ném lại lỗi để xử lý tiếp nếu cần thiết
  }
};
