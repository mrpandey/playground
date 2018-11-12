#include<iostream>
#include<GL/glut.h>
#include<cmath>

using namespace std;

void init() {
    glClearColor(0.0, 0.0, 0.0, 0.0);
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(-200.0, 200.0, -200.0, 200.0);
}

void drawParabola() {
    glColor3f(0.8, 0.8, 0.0);

    glBegin(GL_POINTS);
    
    float x=0.0, y=0.0;
    while(y<=200) {
        glVertex2f(x, y);
        glVertex2f(-x, y);
        x += 0.001;
        y = 0.1*x*x;
    }

    glEnd();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    drawParabola();
    glRotatef(0.1, 0.0, 0.0, 1.0);

    glFlush();
    glutSwapBuffers();
}

int main (int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowPosition(30, 50);
    glutInitWindowSize(400, 400);
    glutCreateWindow("Rotating Parabola");
    init();
    glutDisplayFunc(display);
    glutIdleFunc(glutPostRedisplay);
    glutMainLoop();
    return 0;
}
