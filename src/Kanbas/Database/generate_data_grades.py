from random import randint, sample  

# id = 90
# student = range(121, 131)
# module_number = range(1, 9)
# assignment_number = range(4, 8)

# for i in assignment_number:
#     for j in range(1, 4):
        
#         for _student in student: 
#             id = id + 1
#             current_student = _student 
#             assignment = "A" + str(i) + "0" + str(j)
#             grade = randint(50, 100)

#             new_string = ('{\
#                 \n"id_": "' + str(id) + '",\n"student": "'
#                 + str(current_student) + '",\n"assignment": "'
#                 + assignment + '",\n"grade": "' + str(grade) + '"},\n')
#             print(new_string)

student = range(121, 131)
id = 0 
courses = ["CS101", "CAT101", "CAT102", "CAT103", "CAT104", "CAT105", "CAT106"]

for i in student: 
    
    for course in courses: 
        id += 1 
        new_string = '{"_id": "' + str(id) + '", "user": "' + str(i) + '", "course": "' + course + '"},'
        print(new_string)