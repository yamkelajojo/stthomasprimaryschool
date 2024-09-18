// composables/useDataset.js
import { ref } from "vue";
import CryptoJS from "crypto-js";

export function useUsers() {
  const hashPassword = (password) => CryptoJS.SHA256(password).toString();
  const users = ref([
    {
      users: [
        {
          user_id: "1",
          username: "johnstudent",
          email: "johnstudent@example.com",
          password: hashPassword("ngena"),
          personal_information: {
            full_name: "John Doe",
            date_of_birth: "2010-05-15",
            gender: "Male",
            address: "123 Main Street, City, Country",
            contact_details: {
              phone: "+1234567890",
              email: "johnstudent@example.com",
            },
            nationality: "CountryX",
            official_id: "8812255353083",
          },
          family_information: {
            parents_or_guardians: [
              {
                full_name: "Jane Doe",
                relationship: "Mother",
                contact_details: {
                  phone: "+0987654321",
                  email: "janedoe@example.com",
                },
                occupation: "Engineer",
                employment_details: "ABC Corp",
              },
              {
                full_name: "John Smith",
                relationship: "Father",
                contact_details: {
                  phone: "+1230984567",
                  email: "johnsmith@example.com",
                },
                occupation: "Teacher",
                employment_details: "XYZ School",
              },
            ],
            emergency_contact: {
              full_name: "Emily Doe",
              relationship: "Aunt",
              phone: "+1243567890",
            },
          },
          previous_education: {
            school_name: "City Elementary School",
            school_address: "456 Another St, City, Country",
            grades: {
              math: "A",
              science: "B",
              english: "A",
            },
            teacher_recommendations: [
              {
                teacher_name: "Mr. John Brown",
                contact: "johnbrown@school.com",
              },
            ],
          },
          medical_information: {
            medical_conditions: ["Peanut allergy"],
            doctor_contact: {
              doctor_name: "Dr. Sarah White",
              phone: "+123478900",
            },
          },
          supporting_documents: {
            birth_certificate: "url_to_birth_certificate.pdf",
            passport: "url_to_passport.pdf",
          },
        },
      ],
    },
  ]);

  const getAllUsers = () => {
    return users.value[0].users;
  };

  const getUserById = (id) => {
    return users.value[0].users.find((user) => user.user_id === id);
  };

  const login = (username, password) => {
    const user = users.value[0].users.find(
      (user) => user.username === username
    );

    const result = {
      success: false,
      message: "Login failed",
      errors: {},
      data: null,
    };

    if (!user) {
      result.errors.username = "User does not exist";
    } else if (user.password !== hashPassword(password)) {
      result.errors.password = "Password is incorrect";
    }
    if (Object.keys(result.errors).length > 0) {
      return result;
    }
    result.success = true;
    result.message = "Login successful";
    result.data = user;

    console.log("result in login", result);
    localStorage.setItem("user", JSON.stringify(result.data));

    return result;
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    console.log("User data from localStorage:", user); // Log the value
    if (user !== undefined) {
      console.log("NAyi");
      return JSON.parse(user);
    } else {
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    console.log("user removed in local storage");
  };

  return {
    getAllUsers,
    getUserById,
    login,
    getCurrentUser,
    logout,
  };
}
